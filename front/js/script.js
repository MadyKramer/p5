class Products {
    constructor (colors, id, name, price, imageURL, description, altTxt){
    this.colors = colors,
    this.id = id,
    this.name = name,
    this.price = price,
    this.imageURL = imageURL,
    this.description = description,
    this.altTxt = altTxt
    }
}
function askProducts(){
    fetch("http://localhost:3000/api/products")
    .then(function(res){
        if (res.ok){
            return res.json();
        }
    })
    .then(function(value){
        console.log(value);
        /*for (let product of value){

        }
        return console.log(value);*/
    })
    .catch(function(err){
        console.log("C'est pas ok");
    });
}
askProducts();