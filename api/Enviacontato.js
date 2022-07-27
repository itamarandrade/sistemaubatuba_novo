
var url = "https://api.ecoubatuba.com.br/api/email/enviarEmail?empresa=1";
var token = "Basic dG90ZW0xOmE2NGQxODQ4NzdmMTNmMzRkMzY3MDMzYjQ1MTFmNTg0NmEzZGVmMWM=";

$(document).ready(function(){
    $("#wpcf7-cf7sg-form-contato").submit(function(event){
        event.preventDefault();
        var $form = $(this),
        nome = $form.find("input[name='nome']").val(),
        email = $form.find("input[name='email-759']").val(),
        mensagem = $form.find("textarea[name='x5']").val();
        
        function textoemail(email, nome, mensagem, tel1,tel2,endereco){
            var body = '<html><head><title>ECO Ubatuba - Contato: ' + nome + '</title></head><body>';
            body +='Contato através do site:<br />';
            body +='----------------------------------------------------<br />';
            body +='<strong>Mensagem:</strong> '+ mensagem +'<br />';
            body +='----------------------------------------------------<br />';
            body +='<strong>Nome:</strong> ' + nome + '<br />';
            body +='<strong>E-mail:</strong> ' + email + '<br />';
            body +='</body></html>';
            
            return body;
        }


        var dadosJson = JSON.stringify({
        "assunto": "ECO Ubatuba - Contato: " + nome,
        "remetente": email,
        "nome":nome,  
        "mensagem":textoemail(email,nome,mensagem)
    });
        $.ajax({
            headers: {"Authorization" : token},
            url: url,
            datatype: 'json',
            data: dadosJson,
            type: 'POST',
            contentType: 'application/json',
            success: function(data){
                console.log('Sucesso');
                $("#respostaform").append("<h2 style='text-align: center;font-size: 20px;'>Email enviado com sucesso</h2>");
            },
            error: function(data){/*Função que será executada caso a resposta não seja da classe 200*/
            $("#respostaform").append("<h2 style='text-align: center;font-size: 20px;'> Falha ao enviar mensagem</h2>");    
            console.log("Email não enviado");
                

            }
        })
        
    })
    
})


