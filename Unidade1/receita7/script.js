// Função para gerar uma tabela a partir dos dados e das colunas fornecidas
function gerarTabela(dados, colunas) {
    if (!Array.isArray(dados) || dados.length === 0) {
        return "<p>Nenhum dado disponível para exibir.</p>";
    }

    // Cabeçalho da tabela
    let html = `<table class="tabela-generica"><thead><tr>`;
    colunas.forEach(({ exibido }) => (html += `<th>${exibido}</th>`));
    html += `</tr></thead><tbody>`;

    // Corpo da tabela
    dados.forEach(item => {
        html += `<tr>`;
        colunas.forEach(({ propriedade }) => (html += `<td>${item[propriedade] || "-"}</td>`));
        html += `</tr>`;
    });

    html += `</tbody></table>`;
    return html;
}

// Função para buscar dados da API e atualizar a tabela
async function carregarSobremesas() {
    const tabelaDiv = document.getElementById("tabelaDiv");
    tabelaDiv.innerHTML = "Carregando sobremesas...";

    try {
        const res = await fetch("https://random-data-api.com/api/dessert/random_dessert?size=5");
        if (!res.ok) throw new Error("Erro ao acessar a API.");

        const sobremesas = await res.json();
        // Mapeamento de colunas: nome exibido e propriedade do objeto
        const colunas = [
            { exibido: "Nome", propriedade: "variety" },
            { exibido: "Tipo", propriedade: "topping" },
            { exibido: "Sabor", propriedade: "flavor" }
        ];

        // Gera a tabela e insere na div
        tabelaDiv.innerHTML = gerarTabela(sobremesas, colunas);
    } catch (error) {
        console.error("Erro:", error);
        tabelaDiv.innerHTML = "<p>Erro ao carregar sobremesas. Tente novamente.</p>";
    }
}

// Adiciona evento ao botão
document.getElementById("botaoCarregar").addEventListener("click", carregarSobremesas);
