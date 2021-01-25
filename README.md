# AppDron

"AppDron aborda un problema en el despliegue y movimiento de drones en un perimetro determinado."

¿Qué significa esto? 

Pues bien, poder controlar que los drones hagan un movimiento determinado sin salirse de su perimetro. (además de efectuar el movimiento).

## Comenzamos! 🚀

El problema principal era poder saber (dependiendo de la entrada M=unPasoAdelante,R=giroDerecha,L=giroIzquierda) cúal era la siguiente posición del Dron. En el caso de una entrada R o L, se considero un array en el que se encontraba la información de los posibles ejes de orientación (o=oeste,n=norte,e=este,s=sur). Si la entrada se correspondia con R, significaba sumar +1 a la orientación actual. 

Ejemplo: 

```
 Si la entrada es R, y Dron está con orientación a Norte, la siguiente orientación del Dron será al Este. Por lo que en el array será la orientación actual de Dron + 1.
```

Por otro lado, y como era de esperar, si por el contrario la entrada del input era L, significaba restar -1 a la orientación actual. 

Ejemplo: 

```
 Si la entrada es L, y Dron está con orientación a Norte, la siguiente orientación del Dron será al Oeste. Por lo que en el array será la orientación actual de Dron - 1.
```

Bien, un problema resuelto. Ahora bien, si la entrada era M, era necesario saber a que eje (x,y) se sumaria ó restaria el valor de avanza (+1,-1). Para este problema, se abordo la solución anterior. Si se sabe que el Dron está con orientación al oeste, significará que si el dron avanza un paso, se ha de restar -1 al eje de las x's. Con esta "reflexión", podemos notar que haciendo dos arrays podremos obtener fácilmente a quien afectará a (x,y) y de sobre qué valor se ha de operar, si es +1 o -1. 

Arrays: 

coord=(o,n,e,s) // orientación
coordXY=(x,y,x,y) // ejes
coordValue=(-1,1,1,-1) // valor de operación


Aplicaremos un ejemplo: 

```
 Si la entrada es M, se ejecutaría, coordXY[coord[actualOrientation]] para saber sobre que eje operar, y lo mismo para el valor, coordValue[coord[actualOrientation]] para saber sobre que valor se aplicara al eje anterior.

```

## Ejecutando las pruebas ⚙️

En la carpeta de test se dispone un caso de uso que verifica que los movimientos y giros que se determinan desde un inicio al Dron, sean los correctos. Por otro lado, otro caso de uso verifica que el movimiento del dron respete el perimetro determinado.

Más tests a determinar..

## Autores ✒️

* **Emanuel Vallejo** 