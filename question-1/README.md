# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Tengo dos formas de subir, de a un paso, o de a dos.
Intente usar una función recursiva que funcionaba, pero al crecer el numero tardaba demasiado en retornar, asi que probe con una secuencia al estilo fibonacci y funciona a la perfeccion.
La formula seria camino(n) = camino(n-1) + camino (n-2)
por ej:
camino(3) = camino(3-1) + camino(3-2)
------------- 2 + 1 = 3
Hay 3 formas de llegar al 3 escalon

camino(4) = camino(4-1) + camino(4-2)
------------ 3 + 2= 5
Hay 5 formas de llegar al 4 escalon
