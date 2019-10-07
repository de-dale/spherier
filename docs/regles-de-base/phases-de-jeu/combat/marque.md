# Marque

Une Marque représente un Effet se déclenchant à un moment du jeu, sans décision. 

Les marqueurs permettent de représenter des Effets à différer dans la temporalité du jeu.

Un marqueur porte les données suivantes :

- Nom
- Type du Marqueur
- Déclencheurs
- Effets

Exemples factices de la syntaxe: 

- **Marqueur (Choc, Cumul, Attaque<+1>, À la prochaine attaque)**
- **Choc: Marqueur(Cumul, Attaque<+1>, À la prochaine attaque)**

## Types de marqueur
Un marqueur possède un, et un seul type. Le type détermine les contraintes de dépense du marqueur, lorsque les conditions de déclenchement sont réunies. 

> Variantes :
> - Le type "Marqueurs" est associé à un nombre minimal de marqueurs à dépenser pour déclencher l'effet.
> - Le type "Marqueurs" est associé à un nombre maximal de marqueurs que l'on peut dépenser pour un même déclenchement. 

### Cumul
> Wordings?: Stack, Canalisation

Les marqueurs de même nom se cumulent entre eux.
Quel que soit leur nombre, ils sont tous dépensés en même temps, pour une unique utilisation et leurs effets se cumulent.

### Pile
> Delay/Répartition/Jauge/Réserve/Bassin/Pile/Dispersion

Les marqueur de même nom forment une pile.
Il sont dépensés un par un, à chaque fois que les conditions de déclenchement sont réunies, suivant une stratégie "premier arrivé, premier parti" (FIFO) . 

## Déclencheurs

Un **Déclencheur** décrit un contexte, ou un événement qui permet/force le possesseur du marqueur à le consommer.

## Effets
> Cumul des effets vs. Effet le plus puissant

Les effets d'un marqueur peuvent varier .
Le plus souvent ils influent comme modificateur de Compétence:

- <Compétence>
- [Compétence]

- Valeurs : fixe ou lancer. 
    Ex: Marqueur (Cumul, [Pistolet], Attaque)

- Application :
    +/-1 A° (Accélération,  Étourdissement, Paralysie) 
    +/-1 R°
    +/-1 Attaque (Rage, Nova, Affaiblir) 
    +/-1 Dégât

> NB: Typer les Compétences/Capacités
