// ARRAYS
[]  // Estructura de un array

[1, 2, 3, 4, 5, 6, 7]

// array de nivel 1
[1, 'tres', [], {}, true, 6, 7]

// array de nivel 2
[1, 2, ['uno', 'dos', true, false]]

// array de nivel 3
//                0  1    ----------2--------------------------------
//                        0       1      2          3       ---- 4 ----
//                                      0 1 2 3              0      1
// const array = [1, 2, ['uno', 'dos', 't r u e', 'false', [false, true]]]
// const 2del2 = array[2][2][2]  => 'true'
//  const true = array[2][2]
//  const false = array[2][3]

/**Recorrer  y ciclos*/
const array = [1, 2, ['uno', 'dos', 't r u e', 'false', [false, true]], 'final']

// Cantidad de elementos  .length


/**For clásico */
for (let i = 0; i < array.length; i++) {
    console.log('Nivel 1', array[i])

    if (Array.isArray(array[i])) {
        // ['uno', 'dos', 't r u e', 'false', [false, true]]
        for (let index = 0; index < array[i].length; index++) {
            console.log('Nivel 2', array[i][index])

        }
    }

}

// For of
for (const element of array) {
    console.log('Nivel 1', element)

    if (Array.isArray(array[element])) {
        // ['uno', 'dos', 't r u e', 'false', [false, true]]
        console.log(array[element])
        for (const iterator of array[element]) {
            console.log('Nivel 2', iterator)
        }
    }
}


// For in
for (const index in array) {
    console.log('Nivel 1', array[index])

    if (Array.isArray(array[index])) {
        // ['uno', 'dos', 't r u e', 'false', [false, true]]
        // console.log(array[element])
        for (const iterator in array[index]) {
            console.log('Nivel 2', array[index][iterator])
        }
    }
}





