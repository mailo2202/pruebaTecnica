//Multiplicar 2 números sin usar el signo de multiplicación

function multiplicar(num1,num2){
    let salida = 0
    for(let i = 1; i <= num1;i++){
        console.log(num2)
        salida += num2
    }
    console.log(salida)
}

//multiplicar(3,5)


//.....................................................................


//Obtener el número mayor de un arreglo pero solo iterando el arreglo una sola vez

function itinerar(arr){
    let numMayor = arr[0]

    for(let i=0;i<arr.length;i++){
        if(numMayor < arr[i]){
            numMayor = arr[i]
        }
    }
    console.log(numMayor)
}

const arr = [2,4,,226,6,8,20,40,108]

//itinerar(arr)

//-----------------------------------------------------------------------

/* Crear un algoritmo que tome un arreglo de varios niveles de profundidad y se le remueva un
nivel de profundidad sin perder los elementos. ​Ejemplo:
[​[​1,4​]​, ​[​[​1​]​]​, ​[​8, ​[]​]​] el resultado sería [1, 4, [1], 8, [] ]
La finalidad del ejercicio es eliminar los corchetes directos que encierran los valores a lo que
también se le puede llamar eliminar un nivel del arreglo. */

function eliminarNivelDeArreglo(arrM){
    let arrSalida2 = []
    if(arrM.length == 1 || typeof arrM == 'number' || typeof arrM == 'string' ){
        return arrM
    }
    
    for(let i = 0; i < arrM.length ; i++) {
        arrSalida2.push(eliminarNivelDeArreglo(arrM[i]))

    }
    
    return(arrSalida2)
}

function imprimirArreglo(arrM){    
    console.log(arrM)
    console.log(eliminarNivelDeArreglo(arrM))
}
let arrM = [1, ["hola", "que", "tal", ["estas", "estamos", "estoy"], ["bien", "mal"], "acabo"], 2, 5]

imprimirArreglo(arrM)

//------------------------------------------------------------------------------------------------

//Hacer un algoritmo que cuente las veces que se repite una palabra en una frase

function contarPalabras(parrafo, palabra){
    const parrafoArray = parrafo.split(' ')
    let cont = 0
    
    for(let i =0; i<parrafoArray.length; i++){
        console.log(parrafoArray[i])    
        if(parrafoArray[i].toUpperCase()  == palabra.toUpperCase() ){
            cont++
        }
    }
    console.log(cont)
}

const parrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor pulvinar convallis. Fusce lobortis in nisi nec imperdiet. Aliquam ullamcorper lacus non laoreet cursus. Etiam pellentesque turpis et mauris ullamcorper sodales. Aliquam pharetra est augue, eget aliquam arcu hendrerit fermentum. Sed in libero nunc. Fusce quis ex risus. Etiam laoreet feugiat sem in aliquet. Phasellus congue aliquet cursus. In hac habitasse platea dictumst Sed pulvinar elementum velit eu sodales. Ut interdum vitae nibh at blandit. Suspendisse potenti. Nullam in risus felis. Pellentesque sit amet luctus tellus, sed consectetur enim. Morbi convallis mollis sem vel euismod. Curabitur et ornare augue. Sed efficitur bibendum sollicitudin. Vivamus maximus mi quis risus pharetra ultrices ac ut augue. Duis porta libero eu dignissim faucibus. Integer lacinia mattis sem quis finibus. Vivamus nec eros mattis, rutrum ligula in, sollicitudin sapien. Aenean ante ipsum, porta sed suscipit at, sodales nec leo. Ut aliquam sodales est. Fusce ut dapibus nibh. In eleifend vulputate nisl a aliquam. Duis sit amet bibendum purus, ac laoreet ex. Etiam a congue quam. Curabitur molestie, lacus non molestie sollicitudin, felis magna imperdiet ante, vitae dignissim purus lacus ac eros. Aliquam pulvinar erat ac urna laoreet, sed interdum quam interdum. Vivamus eu dapibus tortor, id scelerisque risus. Suspendisse ac posuere neque. Ut purus nisi, consequat a gravida ac, efficitur vitae nunc. Mauris sit amet erat vehicula, cursus est id, interdum ante. Vestibulum tincidunt egestas est, vitae condimentum lorem bibendum nec. Etiam nec efficitur urna. Morbi eu pharetra sapien, quis ultricies tellus. Sed magna nisl, dapibus ut nisl et, fermentum aliquet massa. Aenean pulvinar orci vitae posuere semper. Suspendisse semper pellentesque tincidunt. Duis et efficitur nisi. Maecenas ac odio eget eros pharetra fringilla. Ut feugiat nulla eleifend sem aliquam tempus. Pellentesque luctus venenatis nisl, non consectetur mi condimentum in. Nullam tristique nisi vel ante fringilla pretium. Suspendisse volutpat enim ut nunc fermentum aliquet. Vivamus lacinia purus ornare interdum semper. Sed vehicula in orci sed laoreet. Aliquam erat volutpat. Morbi euismod eros ac tempus tincidunt. Donec lorem magna, pretium faucibus tortor at, maximus malesuada elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pellentesque est eget massa laoreet, sed congue est pellentesque"
const palabra = "Lorem"
//contarPalabras(parrafo,palabra)
