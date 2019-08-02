#!/bin/bash

usage(){
    cat << USAGE >&2
Usage:
    $cmdname KEY TOKEN [...options]

    TODO
    -h | --help			display this message
    -v | --version		print version
    -k | --key		    	trello key
    -t | --token	    	trello token
    -o |--output-dir    output directory
USAGE
    exit 1
}

# process arguments
while [[ $# -gt 0 ]]
do
    case "$1" in
        -h | --help)
    	    usage
        ;;
        -v|--version)
            echo "0.1.0"
            exit 1
        ;;
        -k|--key)
            KEY="$2"
            shift
            shift
        ;;
        -t|--token)
            TOKEN="$2"
            shift
    	    shift
        ;;
        -o|--output-dir)
            OUTPUT_DIR="$2"
            shift
    	    shift
        ;;
esac
done

if [[ -z "$KEY" ]]; then
    usage
fi
if [[ -z "$TOKEN" ]]; then
    usage
fi
if [[ -z "$OUTPUT_DIR" ]]; then
    OUTPUT_DIR=tmp
fi
mkdir -p $OUTPUT_DIR

get_trello() {
read -r -d '' url << EOL
https://api.trello.com/1/search?query=board:Sph%C3%A9rier+and+-is:archived\
&key=$KEY\
&token=$TOKEN\
&modelTypes=cards\
&card_fields=name,shortUrl,desc,pos\
&cards_limit=1000\
&card_list=true
EOL

echo -e "Trello url:\n$url"
curl --silent -X GET "${url}" > trello.raw.json;
}

parse_trello_to_book() {
  gitbook_name() {
    echo "$1" | \
      sed -e 's/[ |]\+/-/g
              s/\(.*\)/\L\1/' | \
      iconv -f UTF-8 -t ASCII//TRANSLIT | \
      sed -e 's/[^a-zA-Z0-9+-]//g'
  }

  write_content() {
    FILE="$1"
    OUTPUT_FILE="$OUTPUT_DIR/$FILE"
    content=$2
    [[ -f "$OUTPUT_FILE" ]] || {
        echo "Write $FILE";
        mkdir -p $(dirname "$OUTPUT_FILE");
        echo -e "$content" > "$OUTPUT_FILE";
      }
  }
#  print_array() {
#    eval "declare -A array="${1#*=}
#    for item in "${!array[@]}"
#    do
#      value=${array[$item]}
#      if [[ "$(declare -p value)" =~ "declare -A" ]]; then
#          printf "Array: [%s]" "$item" ;
#          print_array "$(declare -p value)"
#      else
#        printf "[%s]=%s\n" "$item" "$value" ;
#      fi
#    done
#  }

  declare -A summary;
  echo -e "# Table of contents" >> "$OUTPUT_DIR/SUMMARY.md";
  echo -e "" >> "$OUTPUT_DIR/SUMMARY.md";

  while read -r line
    do
      name=$(printf '%s' "$line" | awk -F '\t' '{printf "%s", $1}' | sed "s/\//|/g");
      desc=$(printf '%s' "$line" | awk -F '\t' '{printf "%s", $2}');
      list=$(printf '%s' "$line" | awk -F '\t' '{printf "%s", $3}' | sed "s/\//|/g");

      LIST_DIR=$(gitbook_name "$list")
      LIST_FILE="$LIST_DIR/README.md"
      write_content "$LIST_FILE" "# $list"

      CARD_FILE="$LIST_DIR/"$(gitbook_name "$name")".md"
      write_content "$CARD_FILE" "$desc"

      [[ ${summary["$list"]} ]] || {
        echo -e " * [$list]($LIST_FILE)" >> "$OUTPUT_DIR/SUMMARY.md";
        summary+=(["$list"]=true)
      }
      echo -e "   * [$name]($CARD_FILE)" >> "$OUTPUT_DIR/SUMMARY.md";

    done < <(cat trello.raw.json | jq -r '.cards|sort_by(.list.pos, .pos)|.[]|[(.name), (.desc), (.list.name)]|@tsv')
}

main() {
    get_trello
    parse_trello_to_book
}

main