# Personnage

Représentation d'un joueur dans le jeu.
Un personnage est défini par ses :

- **Nom**

    Un personnage possède un nom. 

- **Santé**

    La santé d'un personnage correspond à ses points de vie. Un personnage à zéro point de vie tombe inconscient.

    Un personnage meurt lorsque ses points de vie atteignent le négatif équivalent à sa santé. 

    Chaque personnage commence la partie avec 1 point de vie.

    - Note: vies

        Idée de Quentin: liés personnages on des vies comme à Mario. À zéro, ils consomment une vie mais restent hors combat. Quand Ils n'ont plus de vie, ils meurent. 

- **Quota d'actions**

    Correspond au nombre d'actions que peut faire un personnage durant son tour.

    Chaque personnage commence la partie avec 1 action.

- **Cartes / Sphérier**

    Le personnage possède un ensemble de Cartes contenant des `Sphères`. Chaque `Sphère` continent une ou plusieurs  `Facettes`, dont on applique les effets au personnage. 

Il possède également des :

[Attributs](Attributs.md)

[Compétences](Compétences.md)

## Carte

Une carte est un élément de jeu qui explique un point de règle. Elle représente soit :

- Une Sphère
- Une Facette : Une Capacité Une Affinité
- Une aide de jeu (aide RP)

Physiquement, elle se matérialise par une carte à jouer. 

## Sphère / Constellation

Une `Sphère` est le regroupement ordonné de plusieurs `Facettes` selon une thématique donnée.

Une `Sphère` est caractérisée par ses :

- **Nom**

    Le nom d'une `Sphère` doit permettre de comprendre sa thématique. 

- **Pallier d'Affinités**

    Correspond au nombre d'Affinité qu'il faut avoir pour prétendre à la `Sphère` 

- **Facettes**

    Choix ordonnés accessibles au personnage possédant la `Sphère`

**Revente d'une Constellation/Sphère** 

ll est possible de revendre une `Sphère` et récupérer tous les points de `Karma` qui y ont été investis.
**Attention :** Une fois une `Sphère` revendue, il n'est plus possible de la racheter par la suite.

## Facette / Talent

Une `Facette` est un choix possible par un personnage. On ne bénéficie des avantages d'une `Facette` qu'une fois celle ci achetée.

Une Facette peut débloquer une `Capacité` ou une `Affinité`. 

## Affinité

L'`Affinité` pour un `Attribut` correspond à l'investissement d'un personnage dans celui-ci. L'Affinité s'incrémente en achetant les Facettes appropriées. 

Les différentes `Affinités` permettent de débloquer les palliers, donnant ainsi accès à de nouvelles `Sphères`. 

*Note : Affinité(Magie(feu))*

## Capacité

Une `Capacité` est l'aptitude d'un personnage à faire quelque chose. Elle peut être *passive*, ou *active*.

Une **capacité passive** applique continuellement ses effets. Souvent une capacité passive ne s'applique qu'au personnage la possédant. 

Une **capacité active** demande au moins une action pour que ses effets s'appliquent. Souvent, les effets d'une capacité active sont limités dans le temps.

Une capacité ne prend effet que dans une **Phase de jeu** donnée.

L'efficacité d'une Capacité est parfois indexée sur son degré de maîtrise, et donc sur les points de la **Compétence** associee. 

## Resources

Les personnages disposent de plusieurs ressources : 

- Les **Points de vie**, qui représentent une ressource par combat/scène. 
> **Lucidité :** Equivalent des points de vie face aux dommages de Stress (dommages mentaux)
- Les **Points d'expérience/Karma/Synadn** (Adn de synthèse) qui représente leur progression. Cette reserve permet de progresser indifféremment sur un Sphérier de combat ou hors-combat.
- Les (jetons d')**Affinités**, qui permettent au personnage d'utiliser des actions spéciales