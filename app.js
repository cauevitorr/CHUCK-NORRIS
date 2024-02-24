document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://api.chucknorris.io/jokes/categories'
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao receber os dados')
            }
            return response.json()
        })
        .then((data) => {
            gerarCategorias(data);
        })
        .catch((err) => console.log(err))
})

function gerarCategorias(categorias) {
    const select = document.getElementById('select')
    categorias.map((categorias) => {
        const option = document.createElement('option')
        option.innerHTML = `${categorias}`
        option.value = categorias
        select.appendChild(option)
    })
}

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    const select = document.getElementById('select').value

    const url = `https://api.chucknorris.io/jokes/random?category=${select}`

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao receber os dados')
            }
            return response.json()
        })
        .then((data) => {
            criarPiada(data);
        })
        .catch((err) => console.log(err))
})

function criarPiada(data) {
    const joke = document.getElementById('joke')
    joke.innerHTML = data.value
}