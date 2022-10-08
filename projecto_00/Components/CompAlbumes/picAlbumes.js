import { getdata } from "../../service/service";

export const setupPic = async () => {
  const albumes = await getdata("albumes");
  console.log(albumes);
mapinfoalbum(albumes);
 
}

const templatePic = (album) => {
    document.querySelector('#AlbumContainer').innerHTML +=
     `
<div class="fotoalbum" style="background-image: url(${album.img})">

</div>
`

}
const mapinfoalbum = (listAlbumes) => {
const albumes = listAlbumes.map((album) => {
    return {
        id: album.id,
        title: album.title,
        img: album.img

    }
})
for (const album of albumes) {
    templatePic(album)
}

}