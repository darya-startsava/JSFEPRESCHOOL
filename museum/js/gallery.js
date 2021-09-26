function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const pictureInnerContainer = document.querySelector('.container-gallery-inner-section');
const images = [];
for (let i = 1; i <= 15; i++) {
    const imgSrc = `assets/img/gallery/galery${i}.jpg`;
    images.push(imgSrc);
   
}

shuffle(images);

images.forEach(item => {
    const img = document.createElement('img');
    img.classList.add('gallery-picture')
    img.src = item;
    img.alt = 'picture';
    
    pictureInnerContainer.append(img);
})




