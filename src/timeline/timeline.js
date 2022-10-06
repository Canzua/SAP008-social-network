import {signOut} from "../firebase/firebase.js"

export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-timeline">
            <div class="container-logo">
                <img class="logo-img" src="./images/logo_02_blue_081E26.png"alt="logo do título">
            </div>
            <nav class="navbar">
                    <ul class="navbar-list"> 
                        <li class="navbar-item-button">
                            <button type="button" id="navbar-button">BOTÃO</button>
                        </li>
                        <li class="navbar-item">
                            <a href='#profile'>Perfil</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#post'>Publicar Post</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#about'>Show +</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#aboutus'>Sobre Nós</a>
                        </li>
                        
                        <li class="navbar-item" id="logout">
                            <a>Sair</a>
                        </li>
                    </ul>
                </nav>
                <section id="timeline-post"></section>
        </div>     
    `;

    container.innerHTML = template;

    const menu = container.querySelector("#navbar-button");
    menu.addEventListener('click', () => {
    const items = container.querySelectorAll(".navbar-item");
    items.forEach ( item => {
    item.classList.toggle("hide");
        })
    console.log(items);
    });

    container.querySelector('#logout').addEventListener('click', e => {
        e.preventDefault();
        signOut();
        window.location.hash = ""
    });

    return container;
}