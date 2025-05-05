function testButton() {
    console.log("button works!");
  }
  
  function button() {
    console.log("button is clicked");
    alert("button clicked from game ");
  }
  
  function randomizeImages() {
    var imageNumber = Math.floor(Math.random() * 2);
    console.log(imageNumber);
  }
  
  // randomizeImages();
  
  console.log("JS mario");

  imagelist=["star.jpg","mushroom.webp", "mushroom.webp", "mushroom.webp", "mushroom.webp", "mushroom.webp", "mushroom.webp","star.jpg","star.jpg","star.jpg","star.jpg","star.jpg","star.jpg", ]

  imagelist[0]

  function shuffleImages(){
   newShuffledList =   [Math.floor(imagelist.length * Math.random())];

   console.log(`regular list: `+ imagelist)
  console.log(`randomized list:` + newShuffledList)

  }

shuffleImages()
  
//  Need function to randomize pictures and display them in HTML. 
  
// Need to create function to hide and show images. 
  
// Need function that will take two arguments, picture 1 and 2. if the pictures have the same value it is a match, if they do not, it is not a match and hide the pictures. 
  
  