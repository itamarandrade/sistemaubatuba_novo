$(document).ready(function () {

var url = "https://sistema.hml.ecoubatuba.com.br/api/tarifacao/atual";
var token = "Basic dG90ZW0xOmE2NGQxODQ4NzdmMTNmMzRkMzY3MDMzYjQ1MTFmNTg0NmEzZGVmMWM=";

    let descricaoSite;
    $.ajax({
        headers: {"Authorization" : token},
        url: url,
        type: "get",
        crossDomain: true,
        dataType: "JSON",
        success: function (result) {
            console.log(result);
            console.log(result.itens[0].descricaoSite);
            console.log(result.itens[1].descricaoSite);
            console.log(result.itens[2].descricaoSite);
            console.log(result.itens[3].descricaoSite);
            console.log(result.itens[4].descricaoSite);
            console.log(result.itens[5].descricaoSite);
            
            $('#pequeno').text(result.itens[0].descricaoSite);

            $('#precopequeno').text("R$ " + parseFloat(result.itens[0].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#precopequenof').text("R$ " + parseFloat(result.itens[0].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#moto').text(result.itens[1].descricaoSite);

            $('#precomoto').text("R$ " + parseFloat(result.itens[1].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#precomotof').text("R$ " + parseFloat(result.itens[1].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();

            $('#utilitarios').text(result.itens[2].descricaoSite);

            $('#precoutilitarios').text("R$ " + parseFloat(result.itens[2].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#precoutilitariosf').text("R$ " + parseFloat(result.itens[2].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#excursao').text(result.itens[3].descricaoSite);

            $('#precoexcursao').text("R$ " + parseFloat(result.itens[3].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#precoexcursaof').text("R$ " + parseFloat(result.itens[3].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#onibus').text(result.itens[4].descricaoSite);

            $('#precoonibus').text("R$ " + parseFloat(result.itens[4].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#precoonibusf').text("R$ " + parseFloat(result.itens[4].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#caminhoes').text(result.itens[5].descricaoSite);

            $('#precocaminhoes').text("R$ " + parseFloat(result.itens[5].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();
            $('#precocaminhoesf').text("R$ " + parseFloat(result.itens[5].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")).toString();

        },
        error: function (result) { console.trace(result); console.log("Erro ao carregar API"); },

    });
});


