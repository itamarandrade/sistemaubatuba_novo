
var url = "https://api.ecoubatuba.com.br/api/email/enviarEmail?empresa=1";
var token = "Basic dG90ZW0xOmE2NGQxODQ4NzdmMTNmMzRkMzY3MDMzYjQ1MTFmNTg0NmEzZGVmMWM=";

$(document).ready(function(){
    $("#wpcf7-cf7sg-form-contato").submit(function(event){
        event.preventDefault();
        var $form = $(this),
        nome = $form.find("input[name='nome']").val(),
        email = $form.find("input[name='email-759']").val(),
        endereco = $form.find("input[name='Endereo']").val(),
        tel1 = $form.find("input[name='Tel1']").val(),
        tel2 = $form.find("input[name='Tel2']").val(),
        mensagem = $form.find("textarea[name='x5']").val();
        
        function textoemail(email, nome, mensagem, tel1,tel2,endereco){
            var body = '<html><head><title>ECO Ubatuba - Contato: ' + nome + '</title></head><body>';
            body +='Contato através do site:<br />';
            body +='----------------------------------------------------<br />';
            body +='<strong>Mensagem:</strong> '+ mensagem +'<br />';
            body +='----------------------------------------------------<br />';
            body +='<strong>Nome:</strong> ' + nome + '<br />';
            body +='<strong>E-mail:</strong> ' + email + '<br />';
            body +='<strong>Endereço:</strong> ' + endereco + '<br />';
            body +='<strong>Telefone 1:</strong> ' + tel1 + '<br />';
            body +='<strong>Telefone 2:</strong> ' + tel2 + '<br />';
            body +='</body></html>';
            
            return body;
        }


        var dadosJson = JSON.stringify({
        "assunto": "ECO Ubatuba - Contato: " + nome,
        "remetente": email,
        "nome":nome,  
        "mensagem":textoemail(email,nome,mensagem,tel1,tel2,endereco)
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
            },
            error: function(data){/*Função que será executada caso a resposta não seja da classe 200*/
                alert("Email não enviado");
            }
        })
        
    })
    
})


