function pesquisar() {
// Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    console.log(campoPesquisa)
// se o campoPesquisa for uma string sem nada
    if (!campoPesquisa ){
        section.innerHTML = "<p>Não encontrado. Digite o nome de um cantor ou cantora.</p>"
        return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()
//Inicia uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";
//Itera sobre cada dado na lista de dados 
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
//se no dado titulo includes campoPesquisa, faça...
        if (titulo.includes(campoPesquisa) || 
        descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ) {
            //cria um novo elemento
            resultados += `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descrição-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
    `
        }
    if (!resultados){
        resultados = "<p>Não foi encontrado</p>"}
    }
//Atribui o HTML gerado à seção de resultados 
    section.innerHTML = resultados
}
