$(document).ready(function () {

    var url = "https://sistema.ecoubatuba.com.br/api/tarifacao/atual";
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
               const R = Object.values(result.itens);
                R.sort((a, b) => (a.valor > b.valor)? 1 : (a.valor < b.valor) ? -1: 0);
                
                for (let i in R){
                
                    
                    var newRow = $("<tr>");
                    var col = "";
                    var linha = "";
                    col+= '<tr><td>'+ R[i].descricaoSite +'</td><td> R$ '+ parseFloat(R[i].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") +'</td></tr>';
                    linha+='<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">'+ R[i].descricaoSite+'<p id="precomotof">R$ '+ parseFloat(R[i].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")+ '</p></span>';

                    $('.preco>tbody').append(col);

                    $('#tabelaprecosf').append(linha);

                }
            },
            error: function (result) { console.trace(result); console.log("Erro ao carregar API"); },
    
        });
    });