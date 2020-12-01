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
    sortBy:"price",
    showEditForm:false,
    showNewForm:false,
    editIndex:0,
    deleteIndex:0
}
const deleteArt = (index) => {
    console.log(index);
    state.deleteIndex = index
    console.log("delete called");

    const filteredGroup = state.artPiecies.filter((art,filteredIndex) => {
        return filteredIndex !== state.deleteIndex
        })

    state.artPiecies = filteredGroup
  
  render();
}

const showEditForm = () => {
    
    let htmlString = ` <div class="row" id="editForm">
    <form id = "editArtForm" class="col s12" >
        <div class="input-field col s12">
            <input placeholder="Name" name="artName" type="text" class="validate" value = "${state.artPiecies[state.editIndex].name}">
            <label for="first_name"></label>
        </div>
        <div class="input-field col s12">
            <input placeholder="Artist" name="artArtist" type="text" class="validate" value = "${state.artPiecies[state.editIndex].artist}">
            <label for="first_name"></label>
        </div>
        <div class="input-field col s12">
            <input placeholder="Price" name="artPrice" type="text" class="validate" value = "${state.artPiecies[state.editIndex].price}">
            <label for="first_name"></label>
        </div>
        <a class="waves-effect waves-light btn-small" onclick="updateArt()">Update</a>
        
    </form>
    </div>`

    console.log("unHideEditForm")
    return htmlString

}

const updateArt = () => {
    let name = document.getElementById("editArtForm").elements.item(0).value;
    let artist = document.getElementById("editArtForm").elements.item(1).value;
    let price = document.getElementById("editArtForm").elements.item(2).value;

    state.artPiecies[state.editIndex]={
        name: name, 
        artist: artist,
        price: price
    }
    
    document.getElementById("editArtForm").reset()
    state.showEditForm = false
    render();


}

const addArt = () => {
    console.log("add an art peice")


let name = document.getElementById("newArtForm").elements.item(0).value;
let artist = document.getElementById("newArtForm").elements.item(1).value;
let price = document.getElementById("newArtForm").elements.item(2).value;
console.log(name + artist + price) 

state.artPiecies.push({
    name: name, 
    artist: artist,
    price: price
})

document.getElementById("newArtForm").reset()

state.showNewForm = false
render();
}


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
                      <a onclick="unHideEditForm(${index})">Edit</a>
                      <a onclick="deleteArt(${index})">Delete</a>
                    </div>
                  </div>
                </div>
             `
    })
    htmlString += `</div>`
    return htmlString
}

const showNewForm = () => {
   console.log("show form") 
   let htmlString = `
    <div class="row" id="newForm">
                <form id = "newArtForm" class="col s12" >
                    <div class="input-field col s12">
                        <input placeholder="Name" name="artName" type="text" class="validate">
                        <label for="first_name"></label>
                    </div>
                    <div class="input-field col s12">
                        <input placeholder="Artist" name="artArtist" type="text" class="validate">
                        <label for="first_name"></label>
                    </div>
                    <div class="input-field col s12">
                        <input placeholder="Price" name="artPrice" type="text" class="validate">
                        <label for="first_name"></label>
                    </div>
                    <a class="waves-effect waves-light btn-small" onclick="addArt()">Submit</a>
                    <a class="waves-effect waves-light btn-small" onclick="hideForm()">Hide Form</a>
                    
                </form>
            </div>
    `
    return htmlString
    
}
const unHideEditForm = (index) => {
    console.log("unHideEditForm")
    state.editIndex = index
    state.showEditForm = true
    render();
}

const unHideNewForm = () => {
    console.log("unHideNewForm")
    state.showNewForm = true
    render();
}

const hideForm = () => {
    console.log("Hide New Form")
    state.showNewForm = false
    render();
}

const render = () =>{
    let root = document.getElementById("root")
    let htmlString = `<h1>${state.headerTitle}</h1>`
    htmlString += `<a onclick= "unHideNewForm()" class="waves-effect waves-light btn">New Art Peice</a>`
    htmlString += showArt()
    // htmlString += showForm()
    if (state.showNewForm == true) {
        htmlString += showNewForm()
        state.showEditForm == false
    } else console.log("new form is false")
    if (state.showEditForm == true){
        htmlString += showEditForm();
        state.showNewForm == false
    } else console.log ("edit form is false")

    root.innerHTML = htmlString
 }

render()
console.log("its working")