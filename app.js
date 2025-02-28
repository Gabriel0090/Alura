function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Convertendo para minúsculas

    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return;
    }

    let resultados = "";

    for (let dado of dados) {
        const universo = dado.universo.toLowerCase();
        const descricao = dado.descricao.toLowerCase();

        if (universo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.universo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank"> mais info</a>
                </div>
            `;
        }
    }


    if (!resultados){
resultados= "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados; // Inserindo os resultados na seção
}

