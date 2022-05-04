$(document).ready(function () {

var url = "https://sistema.hml.ecoubatuba.com.br/api/tarifacao/atual";
var token = "Basic dG90ZW0xOmE2NGQxODQ4NzdmMTNmMzRkMzY3MDMzYjQ1MTFmNTg0NmEzZGVmMWM=";

    let descricaoClassificacao;
    $.ajax({
        headers: {"Authorization" : token},
        url: url,
        type: "get",
        crossDomain: true,
        dataType: "JSON",
        success: function (result) {
            console.log(result);
            console.log(result.itens[0].descricaoClassificacao);
            console.log(result.itens[1].descricaoClassificacao);
            console.log(result.itens[2].descricaoClassificacao);
            console.log(result.itens[3].descricaoClassificacao);
            console.log(result.itens[4].descricaoClassificacao);
            console.log(result.itens[5].descricaoClassificacao);
            
            $('#pequeno').text(result.itens[0].descricaoClassificacao);

            $('#precopequeno').text("R$ " + parseFloat(result.itens[0].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();

            $('#moto').text(result.itens[1].descricaoClassificacao);

            $('#precomoto').text("R$ " + parseFloat(result.itens[1].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();

            $('#utilitarios').text(result.itens[2].descricaoClassificacao);

            $('#precoutilitarios').text("R$ " + parseFloat(result.itens[2].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();

            $('#excursao').text(result.itens[3].descricaoClassificacao);

            $('#precoexcursao').text("R$ " + parseFloat(result.itens[3].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();

            $('#onibus').text(result.itens[4].descricaoClassificacao);

            $('#precoonibus').text("R$ " + parseFloat(result.itens[4].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();

            $('#caminhoes').text(result.itens[5].descricaoClassificacao);

            $('#precocaminhoes').text("R$ " + parseFloat(result.itens[5].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
        

        },
        error: function (result) { console.trace(result); console.log("Erro ao carregar API"); },

    });
});


