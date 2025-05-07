function randomizeImages() {
  var imageNumber = Math.floor(Math.random() * 2);
  console.log(imageNumber);
}

let mushroom = 'mushroom.webp'
let star = 'star.png'

console.log("JS mario");

let images = [mushroom, mushroom,mushroom,mushroom,mushroom,mushroom, star, star,star,star,star,star]
let imagelist = images.length;

console.log(imagelist)

function shuffleImages() {
  console.log('function called')
  let i = 0
  while (i < 12) {
    
    const randomIndex = Math.floor(Math.random() * images[i]);
    console.log(`this is: ${randomIndex}`)
    i++;
  }    
};

shuffleImages()
