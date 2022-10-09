import './style.css'

import { initalbumesPage } from './Pages/albumespage/albumesPage';

initalbumesPage()








const AlbumContainer = document.querySelector('#AlbumContainer')

AlbumContainer.addEventListener("click",()=>{
/*     const newTemplate = `
    <div class="modal">
    <span class= "close">&times;</span>
    </div>
    ` */
    //document.body.insertAdjacentElement("beforeend", newTemplate);
    document.body.innerHTML += `
    <div class="modal">
    <span class= "close">&times;</span>
    </div>
    `
    
}) 




