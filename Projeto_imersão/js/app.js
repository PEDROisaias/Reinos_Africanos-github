function pesquisar() {
    // Essa função é responsável por buscar os dados dos reinos e exibir os resultados na página.

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
        return
    }

    if (campoPesquisa == " ") {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>";
        return
    }



    let titulo = "";
    let descricao = "";
    let tags = "";



    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada elemento (dado) do array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (dado.titulo.toLowerCase().includes(campoPesquisa) ||
            dado.descrição.toLowerCase().includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2> ${dado.titulo} </h2> <p class="descricao-meta">${dado.descrição} </p> <p> <a href="${dado.link}" target="_blank"> Mais informações</a> </p> </div>
        `;


        }

        // Concatena o HTML de cada resultado à string 'resultados'

    }
    if (resultados == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
    // Atribui o HTML completo da seção à propriedade innerHTML do elemento
    section.innerHTML = resultados;
}