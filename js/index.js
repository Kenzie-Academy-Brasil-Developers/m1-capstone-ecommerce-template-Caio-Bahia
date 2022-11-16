// console.log(data);

let ListaDeProdutos = document.querySelector(".listaProdutos");
let CarrinhoLista = []
let contadorPreço = 0

// console.log(ListaDeProdutos);

let UlCard = document.createElement("ul")
ListaDeProdutos.appendChild(UlCard)

// console.log (ListaDeProdutos)


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
  
  liCard.classList.add("CardProdutos");
  figureCard.classList.add("CardImg");
  sectionCard.classList.add("CardText");
  smallCard.classList.add("CardClass");
  titleCard.classList.add("CardTitle");
  descCard.classList.add("CardDesc");
  valorCard.classList.add("CardValor");
  AddtoCard.classList.add("AddToCart");
 
  
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
  
// ADD CARD

  AddtoCard.addEventListener("click",(event) => {
      event.preventDefault()
      
      
 

    let AddButton = event.target
    let ButtonID = AddButton.id
    let index = ButtonID - 1

    // console.log(index)
    // console.log(AddButton.id) 
    
    CarrinhoLista.push(data[index])
    console.log(CarrinhoLista)
    pushKart(CarrinhoLista,itensCarrinho)

    let contador = document.querySelector(".Quantidade-Numero")
    contador.innerText = CarrinhoLista.length

    let somaContador = (produto.value).reduce()
    
})



return liCard

}

function pushCard(arr, local) {
    for (let i = 0; i < arr.length; i++) {
        let produto = arr[i];
        let push = criarCard(produto);
        local.append(push);
    }
}
pushCard(data, UlCard);






let contadorValorTotal = 0





function criarCardCarrinho(produto,index){
    
    let imagem = produto.img;
    let nameItem = produto.nameItem;
    let description = produto.description;
    let value = produto.value;
    let addCart = produto.addCart;
    let tag = produto.tag;
    let id = produto.id;
    
    let ProdutoOnKart = document.createElement("li");
    let InKartBox = document.createElement("div");
    let InKartImg = document.createElement("img");
    let InKartDescrip = document.createElement("div");
    let InKartTitle = document.createElement("h3");
    let InKartValor = document.createElement("span");
    let RemoveButton = document.createElement("span");
    
    ProdutoOnKart.classList.add("ProdutoOnKart");
    InKartBox.classList.add("InKart-Box");
    InKartImg.classList.add("InKart-Img");
    InKartDescrip.classList.add("InKart-Descri");
    InKartTitle.classList.add("InKart-Title");
    InKartValor.classList.add("InKart-Valor");
    RemoveButton.classList.add("RemoveButton");
    
    InKartImg.src = imagem
    InKartImg.alt = nameItem
    InKartTitle.innerText = nameItem
    InKartValor.innerText = `R$ ${value},00`
    RemoveButton.innerText = "Remover"
    RemoveButton.id = id
    
    InKartBox.append(InKartImg, InKartDescrip)
    InKartDescrip.append(InKartTitle,InKartValor,RemoveButton)
    ProdutoOnKart.appendChild(InKartBox)
    
    RemoveButton.addEventListener("click",(event)=>{
        // event.preventDefault()
        
        let deleteButton = event.target
        // emoveButton(RemoveButton.id,index)
        console.log(index)
        ProdutoOnKart.remove()
        CarrinhoLista.splice(index,1)
        console.log(CarrinhoLista)

        let contador = document.querySelector(".Quantidade-Numero")
        contador.innerText = CarrinhoLista.length
        
        
    })
    return ProdutoOnKart
}


let itensCarrinho = document.querySelector(".KartVisor")

function pushKart(arr, local){
    // console.log(arr)
    local.innerHTML = ""
    for (let i = 0; i < arr.length; i++){

        let produto = arr[i]
        let push = criarCardCarrinho(produto,i)
        local.append(push)
    }
}

let contador = document.querySelector(".Quantidade-Numero")
contador.innerText = CarrinhoLista.length





    

