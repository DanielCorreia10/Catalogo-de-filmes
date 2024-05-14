//dom
const apikey = '35d08dc7'
const frmPesquisa = document.querySelector("form");
const carregaLista = (json) => {
    const lista = document.querySelector(".lista");
    lista.innerHTML = "";

    if (json.Response == 'False'){
        alert('Nenhum filme encontrado!')
        return
    }

    json.Search.forEach(element => {

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}"/> <h2>${element.Title}</h2>`

        lista.appendChild(item)

    });
   
}

//evento e fução

frmPesquisa.onsubmit = (ev) => {

    ev.preventDefault()

    const pesquisa = ev.target.pesquisa.value;

    if(pesquisa == ""){
        alert('Preencha o campo!')
        return
    }

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${pesquisa}`)
    .then(result => result.json())
    .then(json => carregaLista(json))
}

