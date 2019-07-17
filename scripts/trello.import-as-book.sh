#!/usr/bin/env bash

KEY=TO_DEFINE;
TOKEN=TODEFINE;

usage(){
    cat << USAGE >&2
Usage:
    $cmdname KEY TOKEN [...options]

    TODO
    -h | --help			display this message
    -v | --version		print version
    -k | --key		    trello key
    -t | --token	    trello token
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
esac
done

if [[ -z "KEY" ]]; then
    usage
fi
if [[ -z "TOKEN" ]]; then
    usage
fi

main() {
    curl --silent -X GET \
      "https://api.trello.com/1/search?query=board:Sph%C3%A9rier"\
    "&key=$KEY"\
    "&token=$TOKEN"\
    "&modelTypes=cards"\
    "&card_fields=name,shortUrl,desc"\
    "&cards_limit=1000"\
    "&card_list=true"\
    | jq -r '.cards[]|[(.name), (.desc), (.list.name)]|@tsv' \
    | while read -r line; do
      name=$(printf '%s' "$line" | awk -F '\t' '{printf "%s", $1}' | sed "s/\//|/g");
      desc=$(printf '%s' "$line" | awk -F '\t' '{printf "%s", $2}');
      list=$(printf '%s' "$line" | awk -F '\t' '{printf "%s", $3}' | sed "s/\//|/g");
      mkdir -p "$list"; \
      echo -e "$desc" >  "$list/$name.md";
    done
}

main