// Função para gerar a tabela de sobremesas
function gerarTabela(dados, colunas, nomesColunas) {
    if (!Array.isArray(dados) || dados.length === 0) {
        return "<p>Nenhum dado disponível para exibir.</p>";
    }

    let html = `<table><thead><tr>`;
    // Ajuste aqui para exibir os nomes corretos das colunas
    nomesColunas.forEach(coluna => {
        html += `<th>${coluna}</th>`;
    });
    html += `</tr></thead><tbody>`;

    dados.forEach(item => {
        html += `<tr>`;
        // Agora estamos acessando as propriedades com os nomes originais da API (variety, topping, flavor)
        html += `<td>${item.variety || "-"}</td>`;
        html += `<td>${item.topping || "-"}</td>`;
        html += `<td>${item.flavor || "-"}</td>`;
        html += `</tr>`;
    });

    html += `</tbody></table>`;
    return html;
}

// Função para carregar as sobremesas da API usando Promise/then/catch
function carregarSobremesas() {
    const tabelaDiv = document.getElementById("tabelaDiv");
    tabelaDiv.innerHTML = "Carregando sobremesas...";

    fetch("https://random-data-api.com/api/dessert/random_dessert?size=5")
        .then(res => {
            if (!res.ok) throw new Error("Erro ao acessar a API.");
            return res.json();
        })
        .then(sobremesas => {
            // Log para inspecionar os dados da resposta
            console.log(sobremesas);
            
            // Verifique se os dados estão corretos e se as propriedades são válidas
            if (sobremesas.length === 0) {
                tabelaDiv.innerHTML = "Nenhuma sobremesa encontrada.";
                return;
            }

            // Definindo as colunas para a tabela
            const colunas = ["variety", "topping", "flavor"];
            const nomesColunas = ["Nome", "Tipo", "Sabor"]; 

            // Gerando a tabela com os dados e colunas
            tabelaDiv.innerHTML = gerarTabela(sobremesas, colunas, nomesColunas);
        })
        .catch(err => {
            console.error("Erro:", err);
            tabelaDiv.innerHTML = `Erro ao carregar sobremesas: ${err.message}`;
        });
}

// Adiciona o evento no botão para carregar as sobremesas
document.getElementById("botaoCarregar").addEventListener("click", carregarSobremesas);
