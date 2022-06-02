var Usuario={
    login: 'teste',
    senha: 123
};

function autenticarUsuario(){  							// Verifica se os dados digitados batem com o login cadastrado
    if (Usuario.login == $("#ovTXT_usuario").val() &&	// Se sim, muda para tela de cadastro
	    Usuario.senha == $("#ovTXT_senha").val()){		// Se não, exibe mensagem de senha incorreta
		window.location = window.location.href.replace("index", "CadastroProduto");
	} else {
		alert("Usuário/Senha incorretos!");		
	}
}

$(document).ready(function() //com o click do usuario em login dispara a função de autenticação de login
{
    $(document).on("click","#ovBTN_login", autenticarUsuario);
});