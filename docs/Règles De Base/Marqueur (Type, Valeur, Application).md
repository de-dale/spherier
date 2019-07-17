# Marqueur

Les marqueurs représentent des effets à différer dans la temporalité du jeu.

Un marqueur porte les données suivantes :

- Nom
- Type
- Valeurs
- Usage (Application et déclencheur) => à mettre dans l'appelant? 

Exemples factices de la syntaxe: 

- **Marqueur (Choc, Cumul, [Attaque], +<Choc> à la prochaine attaque)**
- **Choc: Marqueur(Cumul, [Attaque], +<Cumul> à la prochaine attaque)**
## Types de marqueur
**Cumul**
> (Stack, Canalisation)

Les marqueurs de même nom se cumulent pour une unique utilisation. 

**Répartition**
> Delay/Répartition/Jauge/Réserve/Bassin/Pile

Les marqueur forment un pool et sont retirés au fur et à mesure. Sur ce type de marqueur, il faut préciser la valeur alimentant le pool, et le nombre de marqueur retiré à chaque fois. 


- Valeurs : fixe ou lancer. 
 Ex: Marqueur (Cumul, [Pistolet], Attaque) 
- Application :
 +/-1 A° (Accélération, Étourdissement, Paralysie) 
 +/-1 R°
 +/-1 Attaque (Rage, Nova, Affaiblir) 
 +/-1 Dégât
