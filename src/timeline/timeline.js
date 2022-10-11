import {
  signOut, getAllPosts, createPost,
} from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

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
                            <a href='#post'>Publicar Post</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#aboutus'>Sobre Nós</a>
                        </li>
                        
                        <li class="navbar-item" id="logout">
                            <a>Sair</a>
                        </li>
                    </ul>
                </nav>
               <section id="show-timeline"></section>
        </div>     
    `;

  container.innerHTML = template;
  const menu = container.querySelector('#navbar-button');

  const showPosts = async () => {
    const groupArr = await getAllPosts();
    const postsTemplate = groupArr.map((post) => `
            <div class="post">
                <p id="user-name">${post.name}</p>
                <p id="artist-name">${post.artist}</p>
                <p id="show-location">${post.location}</p>
                <p id="show-date">${post.date}</p>
                <p id="text-post">${post.text}</p>
            </div>
        `).join('');
    container.querySelector('#show-timeline').innerHTML += postsTemplate;
  };

  showPosts(createPost);

  menu.addEventListener('click', () => {
    const items = container.querySelectorAll('.navbar-item');
    items.forEach((item) => {
      item.classList.toggle('hide');
    });
    console.log(items);
  });

  container.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    redirect('');
  });

  return container;
};
