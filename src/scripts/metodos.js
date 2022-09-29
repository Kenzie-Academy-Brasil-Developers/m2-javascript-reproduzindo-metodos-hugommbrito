// RECRIANDO O MÉTODO ForEach
const array = [1,2,3,4,5]

function minhaCallBackForEach(element, index, array, arrayOriginal) {
    array[index] = `Número ${element} na posição: ${index}, veio desse array: ${arrayOriginal}`;
}

function meuMetodoforEach(array, callback) {
    const arrayOriginal = [...array]
    for(let index = 0; index < array.length; index++){
        const currentValue = array[index]
        callback(currentValue, index, array, arrayOriginal)
    }
}

console.log("RESULTADO .forEach")
meuMetodoforEach(array, minhaCallBackForEach)
console.log(array)
console.log("")



// RECRIANDO O MÉTODO .map
const arrayMap = [1,2,3,4,5]

function minhaCallbackMap(elemento, index, array){
    return elemento * 10
}

function meuMetodoMap(array, callback){
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array))
    }
    return newArray
}

console.log("RESULTADO .map")
console.log(meuMetodoMap(arrayMap, minhaCallbackMap))
console.log("")



// RECRIANDO O MÉTODO .filter
const arrayFilter = [1,2,3,4,5]

function minhaCallbackFilter(elemento, index, array){
    return elemento > 2
}

function meuMetodoFilter(array, callback){
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log("RESULTADO .filter")
console.log(meuMetodoFilter(arrayFilter, minhaCallbackFilter))
console.log("")



// RECRIANDO O MÉTODO .find
const arrayFind = [1,2,3,4,5]

function minhacallbackFind(elemento, index, array){
    return elemento > 3
}

function meuMetodoFind(array, callback){
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)){
            return array[i]
        }
        
    }
}

console.log("RESULTADO .find")
console.log(meuMetodoFind(arrayFind, minhacallbackFind))
console.log("")



// RECRIANDO O MÉTODO .reduce
const arrayReduce = [1,2,3,4,5]

function minhaCallbackReduce(acumulador, elementoAtual, indiceAtual, valorInicial = null){
    // Caso queira atribuir algo para a variável "valorInicial" descomente a linha abaixo e atribua o valor
    // valorInicial = SEU-VALOR-AQUI;
    
    (valorInicial != null && indiceAtual === 0) ? acumulador = valorInicial : acumulador = acumulador;
    
    // Inssira a sua lógica na linha abaixo
    return acumulador + elementoAtual
}

function meuMetodoReduce(array, callback){
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i)
    }
    return result
}

console.log("RESULTADO .reduce")
console.log(meuMetodoReduce(arrayReduce, minhaCallbackReduce))
console.log("")



// RECRIANDO O MÉTODO .includes
const arrayIncludes = [1,2,3,4,5]

const elementoBuscado = 6

function meuMetodoIncludes(array, pesquisado){
    let include = false
    for (let i = 0; i < array.length; i++) {
        (array[i] == pesquisado) ? include = true : "";
    }
    return include
}

console.log("RESULTADO .includes")
console.log(meuMetodoIncludes(arrayIncludes, elementoBuscado))
console.log("")



// RECRIANDO O MÉTODO .indexOf
const arrayIndexOf = [1,2,3,4,5]

const elementoDePesquisa = 2
const pontoInicial = 0

function meuMetodoIndexOf(array, pesquisado, inicio = 0){
    for (let i = inicio; i < array.length; i++) {
        if(array[i] == pesquisado){
            return i
        }
    }
    return -1
}

console.log("RESULTADO .indexOf")
console.log(meuMetodoIndexOf(arrayIndexOf, elementoDePesquisa, pontoInicial))
console.log("")