export default () => {
    const container = document.createElement('div');
    const template = `  
    <div class="container-login">
    
        <img  src="./images/logo_02_azul_081E26.png" alt="logo do título"
        <br>
        <p class = "sub-title">Momentos musicais inesqueciveis</p>                     
        <form>
            <input class="box-name" type="e-mail" id="e-mail" placeholder="Nome de usuário ou e-mail"/>
            <input class= "box-password" type="senha" id="senha" placeholder="Digite sua senha"/> 
            <input class="box-enter" type="button" id="btn-submit" class="btn-submit" value="Entrar"/>       
        </form>
           
        <a class="new-password" "href="">Esqueci a senha</a>
        </br>
        <a class="box-login-google" placeholder=" " href="">Continuar com sua conta do google</a>
        </br>
        <p class="box-register"><a href = '#register'>Cadastre-se</p>

    </div>     
 `;


 container.innerHTML = template;
 return container;
}
