$(document).ready(function () {

    var url = "https://api.hml.ecoubatuba.com.br/api/termoPolitica/atual?sistema=SITE_CORPORATIVO";
    var token = "Basic dG90ZW0xOmE2NGQxODQ4NzdmMTNmMzRkMzY3MDMzYjQ1MTFmNTg0NmEzZGVmMWM=";
    
        
        $.ajax({
            headers: {"Authorization" : token},
            url: url,
            type: "get",
            crossDomain: true,
            dataType: "JSON",
            success: function (result) {
                //const R = Object.values(result);
                console.log(result);
                console.log(result.textoDescritivo);
                console.log(result.linkDocumento);

                window.cookieconsent.initialise({
                    "palette": {
                      "popup": {
                        "background": "#fff",
                        "text":"#000"
                      },
                      "button": {
                        "background": "#3f8b58",
                        "text": "#fff",
                        "border": "##3f8b58"
                      }
                    },
                    "position": "bottom",
                    
                      "content": {
                      "message": result.textoDescritivo,
                      "dismiss": "Aceito!",
                      "link":"Politica de Privacidade",
                        "href": result.linkDocumento
                        }
                  })
               
               /*
                for (let i in R){
                    
                    var newRow = $("<tr>");
                    var col = "";
                    col+= '<tr><td>'+ R[i].descricaoSite +'</td><td> R$ '+ parseFloat(R[i].valor, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") +'</td></tr>';
                    
                    $('.preco>tbody').append(col);

                }*/
            },
            error: function (result) { console.trace(result); console.log("Erro ao carregar API"); },
    
        });
    });

    
    //window.addEventListener("load", function(){
   //});
    