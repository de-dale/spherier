# Combat

> La violence est le dernier recours de l'incompétence.
>
> Ça y'est! Vous êtes entrés dans une phase de négociation musclée. Il est temps de se mettre sur la figure, : le combat commence.

Lorsque les joueurs, ou le maître du jeu, décident qu'il est temps de réduire l'ennemi en petits bouts plus ou moins comestibles, on déclenche un **Combat**.

~~Lors d'une rencontre entre différents `protagonistes`, c'est à dire des personnages joueurs comme non joueurs, lorsque l'un d'eux montre une velléité de porter atteinte à l'intégrité, physique, ou mentale de l'autre partie, alors on initie une phase de combat.~~

**Protagoniste:** dans un combat, on appelle `protagoniste`, tout personnage, joueur ou non-joueur, prenant part au combat.

**Mise en place :**

On détermine qui peut agir, on rassemble leurs ressources \(cartes Action et Réaction\) et on se tient prêt pour la première passe d'initiative.

Le combat est découpé en tours, pour simplifier la gestion de la temporalité.

## Tours de combat

Un tour de combat se découpe de la manière suivante :

* Préparation
* Passe d'initiative \(une ou plusieurs\) 
* Fin du tour

Un tour de combat commence avec la **préparation**:

* on mélange le deck d'initiative
* on distribue les cartes réactions

Une fois la préparation terminée, le tour **continue**; on entame une passe d'initiative, en révélant une carte. Tant qu'il y a au moins une carte dans le deck d'initiative, le tour **continue** ; on enchaîne les passes d'initiative.

Le tour se **termine** lorsqu'on tente de révéler une carte d'action dans le deck d'initiative, mais que ce dernier est vide. À ce moment, tous les `protagonistes` perdent leurs actions restantes :

* les cartes action restantes ne peuvent plus être utilisées
* les cartes réaction restantes ne peuvent plus être utilisées

  Si le combat n'est pas terminé, on recommence un tour de combat, avec sa préparation.

### Préparation

Chaque `protagoniste` dispose d'un certain nombre de points d'**`Actions`**, matérialisés par des cartes nominatives.

Au début du tour de combat, tous les `protagonistes` mettent en commun leurs cartes **`Actions`** que l'on mélange pour constituer le **`Deck d'initiative`** \(wording: Deck d'action ?\).

Le tour commence lorsque le MJ \(ou n'importe quel autre joueur\) révèle la première carte du Deck d'initiative.

## Agir: l'Initiative

Une **`passe d'initiative`** démarre alors.

### Passe d'initiative

Une **`Passe d'initiative`** est la séquence d'événements se déroulants, à partir le moment où une carte du Deck d'initiative est révélée, et ce jusqu'à ce que la passe d'initiative prenne fin. Une **`Passe d'initiative`** est la séquence d'événements se déroulants, entre deux pioches de cartes du deck d'initiative. Elle commence avec la première pioche, et se finit avant la seconde.

Une **`Passe d'initiative`** se déroule de la manière suivante :

1. la **pioche:** une carte du Deck d'initiative est révélée. La pioche marque le début de la passe. 
2. l'**action** : le `protagoniste` inscrit sur la carte d'action **possède l'initiative**. Il peut alors:
   1. **jouer:** il peut consommer tout ou partie des carte d'actions qu'il possède à cet instant, pour utiliser des capacités et effectuer des actions
   2. **passer:** il ne fait rien et met alors sa carte d'action face visible devant lui. Il pourra l'utiliser par la suite. 
3. la **réponse:** les adversaires du `protagoniste` venant de jouer, désignent parmi eux, un `protagoniste`. Ce dernier **possède l'initiative** ; il peut **jouer** ou **passer**.
   * TODO: Pas de méthode de désignation actuellement définie
   * Dans le cas où il y à plus de deux factions, le MJ décide quel camp possède la réponse. Préférentiellement, il s'agira de la faction agressée. La réponse à cette réponse suit les mêmes règles. 
4. Les phases de **réponses** se succèdent à moins que deux `protagonistes` passent consécutivement: La passe d'initiative prend fin.

Exemples : passe d'initiative possible pour un combats en 1 vs1 entre Alice et Bob. Alice pioche et possède l'initiative.

* ☑ _Alice pioche, Alice passe, Bob passe, fin de la passe._
* ☑ _Alice pioche, \(Alice passe, Bob joue,\)^n Alice passe, Bob passe, fin de la passe._
* ☑ _Alice pioche, Alice joue, Bob passe, Alice passe, fin de la passe_
* ☑ _Alice pioche, \(Alice joue, Bob passe,\)^n Alice passe, fin de la passe._
* ☑ _Alice pioche, Alice joue, Bob joue, Alice passe, Bob passe, fin de la passe._
* ☑ _Alice pioche, \(Alice joue, Bob joue,\)^n Alice passe, Bob passe, fin de la passe._

```text
 Pioche --> Action: Alice 
 Joue ---> Réponse: Initiative Bob
 Joue -> Réponse Alice
 Passe -> Réponse Alice
 Passe ---> Réponse: Initiative Bob
 Initiative Alice
```

Questions:

* Si un `protagoniste` passe au cours d'une passe d'action, est-ce qu'il peut rejouer plus tard dans la même passe d'initiative ?
  * Pro: risque pris récompensé, possibilité de rattraper une situation qui dégénère. Empêcher de rejouer fera tourner le combat en tentative de bloquer les réponses adverses. De plus le nombre de réponse serait une ressource directement indexée le la quantité de protagonistes dans chaque camp. 
  * Cons: peut ralentir la passe d'init, ralenti la détermination du `protagonistes` possédant l'initiative. 
  * **Décision:** oui, s'il passe dans une passe d'initiative, un protagoniste peut répondre plus tard dans la même passe. 

## Réagir

Chaque `protagoniste` dispose d'un certain nombre de points de **`Réactions`**, matérialisés par des cartes nominatives. Au début du combat, tous les `protagonistes` récupèrent devant eux, autant de carte **`Réactions`** que leur maximum leur permet.

* la **réaction:** où une équipe effectue une action, hors du flot normal d'initiative \(c'est une mécanisme de pile\)

  -&gt; ça peut être le déclenchement d'une action préparée

  -&gt; ça peut être le déclenchement d'une réaction générique face à un événement prévu par une capacité du personnage \(exemple D&D: un déplacement d'un personnage A dans une case contrôlé par un personnage B provoque une attaque d'opportunité de B vers A\)

## Fin du Tour

Le tour se **termine** lorsqu'on tente de révéler une carte d'action dans le deck d'initiative, mais que ce dernier est vide. À ce moment, tous les `protagonistes` perdent leurs actions restantes :

* les cartes action restantes ne peuvent plus être utilisées
* les cartes réaction restantes ne peuvent plus être utilisées

  Si le combat n'est pas terminé, on recommence un tour de combat, avec sa préparation.

## Surprise

> modulo la surprise, qui fait partie du combat, mais pour laquelle l'initiative n'est parfois pas encore lancée

