function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos. 
    // O elemento com o ID "resultados-pesquisa" será usado para inserir os resultados.
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value 
    if(!campoPesquisa){
        section.innerHTML = "Não localizado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa em formato HTML.
    let resultados = "";

    // Itera sobre cada item (dado) dentro do array 'dados'.
    // 'dados' é um array que contém os resultados da pesquisa (assumindo que ele esteja definido em outro lugar do código).
    let titulo = "";
    let descricao = "";
    let tags = "";
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `;
        } 
      if(!resultados) {
            resultados = "<p> Nada foi encontrado </p>"
      }       
    }

    // Após construir a string completa com todos os resultados,
    // atualiza o conteúdo HTML da seção "resultados-pesquisa" com essa string.
    section.innerHTML = resultados
}

