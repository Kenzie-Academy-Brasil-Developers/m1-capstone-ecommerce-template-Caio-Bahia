// console.log(data);

let ListaDeProdutos = document.querySelector(".listaProdutos");

// console.log(ListaDeProdutos);

let UlCard = document.createElement("ul")
ListaDeProdutos.appendChild(UlCard)

// console.log (ListaDeProdutos)
function pushCard(arr, local) {
  for (let i = 0; i < arr.length; i++) {
    let produto = arr[i];
    let push = criarCard(produto);
    local.append(push);
  }
}

pushCard(data, UlCard);

function criarCard(produto) {
    
    let imagem = produto.img;
    let nameItem = produto.nameItem;
    let description = produto.description;
    let value = produto.value;
    let addCart = produto.addCart;
    let tag = produto.tag;
    let id = produto.id;

  let liCard = document.createElement("li");
  let figureCard = document.createElement("figure");
  let imgCard = document.createElement("img");
  let sectionCard = document.createElement("section");
  let smallCard = document.createElement("small");
  let titleCard = document.createElement("h3");
  let descCard = document.createElement("span");
  let valorCard = document.createElement("p");
  let AddtoCard = document.createElement("p");

  liCard.className = "CardProdutos";
  figureCard.className = "CardImg";
  sectionCard.className = "CardText";
  smallCard.className = "CardClass";
  titleCard.className = "CardTitle";
  descCard.className = "CardDesc";
  valorCard.className = "CardValor";
  AddtoCard.className = "AddToCart";
 
//   console.log(AddtoCard)
  
  imgCard.src = imagem;
  imgCard.alt = nameItem;
  smallCard.innerText = tag;
  titleCard.innerText = nameItem;
  descCard.innerText = description;
  valorCard.innerText = `R$ ${value},00`;
  AddtoCard.innerText = addCart;
  AddtoCard.id = id
  
  
  figureCard.appendChild(imgCard);
  sectionCard.append(smallCard, titleCard, descCard, valorCard, AddtoCard);
  
  liCard.appendChild(figureCard);
  liCard.appendChild(sectionCard)
  
//   console.log(liCard)   
//   console.log (sectionCard)
  
return liCard

}


// ADD TO CART + CONTADORES 
let SomaPreços = 0
let contadorDeProdutos = 0

let CmdAddCart = document.querySelectorAll(".AddtoCard")

let quantidadeProdutos = document.querySelector(".Quantidade-Numero")
let TotalSoma = document.querySelector(".Total-Numero")


let Arr