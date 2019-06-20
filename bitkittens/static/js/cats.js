document.addEventListener("DOMContentLoaded", function() {

let kittyButton = document.querySelector('.summon-cats');
kittyButton.addEventListener('click', e => {
    console.log('kitty');
axios
    .get("http://bitkittens.herokuapp.com/cats.json", {headers: {'X-Requested-With': 'XMLHttpRequest'}})
    .then(response => {
        console.log(response.data);
        
        const kittyName = document.querySelectorAll(".cat-box")
        
        kittyName.forEach( (box, i) => {  

        const kittyImg = document.createElement("img");
        box.innerHTML = '';
        kittyImg.src = response.data.cats[i].photo;
        kittyImg.alt = `Photo of ${response.data.cats[i].name}`; 
        box.appendChild(kittyImg)
    })
  })
})

});




