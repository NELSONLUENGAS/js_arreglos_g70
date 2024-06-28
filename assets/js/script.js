const not = document.getElementById('not')
const yes = document.getElementById('yes')

const home_not = document.getElementById('home_not')
const home_yes = document.getElementById('home_yes')
// console.log(home_not, home_yes)
if (not) {
    renderData(productos, not)
} else if (yes) {
    renderData(productos, yes)
} else {
    renderData(productos, home_not, 3)
    renderData(productos, home_yes, 2)
}

function renderData(productos, container, limit = 0) {
    let cards = ''
    if (limit) {
        for (let index = 0; index < limit; index++) {
            cards += createCard(productos[index])
        }

        container.innerHTML = cards
    } else {
        for (const element of productos) {
            cards += createCard(element)
        }
        container.innerHTML = cards
    }
}


function createCard(producto) {
    return `
        <div class="card">
            <h1 class="text">${producto.nombre}</h1>
            ${producto.disponible ?
            `<span>Disponible</span>`
            :
            `<span>No Disponible</span>`}
        </div>
    `
}