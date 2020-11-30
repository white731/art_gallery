// Art Gallery
// Show an art gallery of pictures
// inlude Picture name, artist, photo, price

let art1 = {
    name: "Great Wall", 
    artist: "Genaro Francesica",
    image:"https://picsum.photos/200",
    price: 290
}

let art2 = {
    name: "Running Water", 
    artist: "Frank Groberg",
    image:"https://picsum.photos/200",
    price: 340
}

let art3 = {
    name: "Fairy Dust", 
    artist: "Haily Fetter",
    image:"https://picsum.photos/200",
    price: 475
}

let state = {
    headerTitle:"Whitesides Art Gallery",
    artPiecies:[art1,art2,art3],
    sortBy:"price"
}

console.log(state.artPiecies)


const showArt = () => {
    console.log ("show art")
    let htmlString = `<div class = "row">`
    state.artPiecies.forEach((artPeice, index) => {
        htmlString += `
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                <img src="https://picsum.photos/400?random=${index}">
                      <span class="card-title">${artPeice.name}</span>
                    </div>
                    <div class="card-content">
                    <p>${artPeice.artist}</p>
                    <p>price: $${artPeice.price}.00</p>
                    </div>
                    <div class="card-action">
                      <a href="#">Edit</a>
                      <a href="#">Delete</a>
                    </div>
                  </div>
                </div>
             `
    })
    htmlString += `</div>`
    return htmlString
}


const render = () =>{
   let root = document.getElementById("root")
   let htmlString = `<h1>${state.headerTitle}</h1>`
   htmlString += showArt()
   root.innerHTML = htmlString
}

render()
console.log("its working")