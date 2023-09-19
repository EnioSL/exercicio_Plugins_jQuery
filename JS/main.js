$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00');
    
    $('form').validate({
        rules: {
            nome: {
                required: true,                            
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true                
            },            
            cpf: {
                required: true                
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira o seu nome e sobrenome',        
            telefone: 'Por favor, insira um número de telefone',
            email: 'Por favor, insira um email válido',
            cep: 'Por favor, insira o CEP',
            cpf: 'Por favor, insira um número de CPF'
        },

        submitHandler: function(form) {
            console.log(form);
            form.reset();
            alert("Cadastro realizado com sucesso!");
        },
        
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)                
            }
        }
    });
});
