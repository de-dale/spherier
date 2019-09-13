Mermaid:
https://mermaidjs.github.io/#/flowchart

```mermaid
graph TD
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
![mermaid](https://mermaid.now.sh/?width=400&height=600&q=graph%20TD%0Asubgraph%20Baie%20r%C3%A9seau%0ARR(Switch%20r%C3%A9seau)--%3E%7CRJ45%7CE%0AA1(Alim%205V%20micro%20USB)--%3EE(Player%20Audio%20raspi)%0Aend%0Asubgraph%20Salle%20de%20jeu%0AE--%3E%7Ccable%20audio%7CF(HP%20amplifi%C3%A9%201)%0AA2(Alim%20PC16)--%3EF%0AF-.-%3E%7Ccable%20audio%7CG(HP%20amplifi%C3%A9%202)%0AA3(Alim%20PC16)--%3EG%0AW1(Webcam%20D5020L)%0AR1(Arriv%C3%A9e%20RJ45)--%3EW1%0AA4(Alim%20PC16)--%3EW1%0Aend%0A%20%20%20%20%20%20) 

![fuu](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAC2ElEQVR4Xu3aMUtqYQDG8cdABZdwL2iJxGaFJKToOyQqBA1uBSKGm0pDEEEZNoWhbYJohuBkTg1hTSEEfY8oQijOy70R0XA6PVyU+7hEeN4Hzo+/noZcAN6g168EXBbi25scnSq6XC4I0anen3NC/CWgdVyIQiQIECZUohAJAoQJlShEggBhQiUKkSBAmFCJQiQIECZUohAJAoQJlShEggBhQiUKkSBAmFCJQiQIECZUohAJAoQJlShEggBhQiUKkSBAmFCJQiQIECZUohAJAoQJlShEggBhQiUKkSBAmBi7EqvVKnZ2dsytPT09we12w+PxmN8PDg6wublp+7avr6/h9/uxuLho+4yTC8cO8fNN5PN5AxCLxZzcG6zzgUAAiUTC0Xm7hyYK0frn/KOjI5TLZQSDQfNzdnYWa2tr2N3dxcrKCprNJs7Pz+Hz+XB5eWlKzmQyKBaLdk1+fN1EIbZaLTQaDVQqFdzd3aFUKuHi4gI3NzfI5XLodDpYXl5GvV43yCoRMAifP87JZBKpVMoUZ70WFhYwGAwwPT2N7e1tPD4+Ymlp6aM6IX6DGI1GMRwOMTU1ZRBfX19xf3+Pubk53N7eIhwOG8j5+XnzvhC/QbQeEOl02mB9fW1sbODl5QUzMzM4PDwU4l+grx9n67uu2+3i5OQEz8/PqNVqyGaz6Pf7Bq7dbmN1dRXHx8cIhULY3983D5atra2PP5N+/NSwcWCiHiyj0cgAnZ2dwev1Ym9vz3w/RiIRnJ6eGrirqyvzpO71enh4eMD6+jri8TgKhYINDmeXjDWis1v696eESDAXohAJAoQJlShEggBhQiUKkSBAmFCJQiQIECZUohAJAoQJlShEggBhQiUKkSBAmFCJQiQIECZUohAJAoQJlShEggBhQiUKkSBAmFCJQiQIECZUohAJAoQJlShEggBhQiUKkSBAmFCJQiQIECZUIhORsPVfT7wDa9/vELhhZQgAAAAASUVORK5CYII=) 

 ![Tes imaget](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#RrZTNUoMwFIWfhqUzQKTqUmhrXeimOv7sMuQWoiGXCUHApzeUUEDaGTvjhsn5cpObnAM4JMrqO0Xz9AEZCMd3We2QpeP7JLgxzxY0HQgC0oFEcdYhbwBb%2Fg0WupaWnEExKdSIQvN8CmOUEmI9YVQprKZlOxTTrjlNYAa2MRVz%2BsKZTjt67V8NfAM8SfvO3sJeOKN9sb1JkVKG1QiRlUMihai7UVZHIFrvel%2B6desTs4eDKZD6Lwv8sv54b%2B6jx6BYrl%2FfNvSZuBd2ly8qSnthe1jd9A5UKdewzWnc6sqE7JAw1ZkwyjNDWuSd7zteg2kV2h1BaahPHtU7GGBeHMAMtGpMiV3QW9ZMZTUKwKJ05H3PqI08Oew7uGIG1pgzTPJnJj1BrWdG6RZOvCm0wk%2BIUKAyRKI0leGOC%2FELUcETaWRs%2FAHDw9Y9bl7CWzuRccbaNuGxMBSWkrXWL9290lRzlFYyrkw8nS6wbP37j4QupwmReULBkYQW5ydk5PCJ7OdG%2Fxmy%2BgE%3D) 

![Alt text](https://g.gravizo.com/source/custom_mark10?https%3A%2F%2Ftrello.com%2Fc%2FCNH0BuJU)
<details>
<summary></summary> custom_mark10 digraph G { size ="4,4"; main [shape=box]; main -> parse [weight=8]; parse -> execute; main -> init [style=dotted]; main -> cleanup; execute -> { make_string; printf}; init -> make_string; edge [color=red]; main -> printf [style=bold,label="100 times"]; make_string [label="make a string"]; node [shape=box,style=filled,color=".7 .3 1.0"]; execute -> compare; } custom_mark10
</details>
