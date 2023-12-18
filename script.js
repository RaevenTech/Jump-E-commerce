const sliderWrapper = document.getElementById("slider_wrapper")
const menuItem = document.querySelectorAll(".menu_item")
//console.log(menuItem)

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/AirForcebg.png",
      },
      {
        code: "darkblue",
        img: "./images/AirForce2bg.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./images/Jordanbg.png",
      },
      {
        code: "green",
        img: "./images/Jordan2bg.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "white",
        img: "./images/Blazerbg.png",
      },
      {
        code: "green",
        img: "./images/Blazer2bg.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/Craterbg.png",
      },
      {
        code: "whitesmoke",
        img: "./images/Crater2bg.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/Hippiebg.png",
      },
      {
        code: "slategrey",
        img: "./images/hippie3.png",
      },
    ],
  },
];

let chosenProduct = products[0]

const currentProductImage = document.getElementById("product_img")
const currentProductTitle = document.getElementById("product_title")
const currentProductPrice = document.getElementById("product_price")
const currentProductColors = document.querySelectorAll("#color")
const currentProductSizes = document.querySelectorAll("#size")
//console.log(currentProductColors)

menuItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    //changes the slides in the slide show
    sliderWrapper.style.transform = `translateX(${-100 * i}vw)`

    //change the chosen product to display
    chosenProduct = products[i]
    //console.log(chosenProduct)

    //change text of curent product
    currentProductTitle.textContent = chosenProduct.title
    //change price of chosen product
    currentProductPrice.textContent = `€${chosenProduct.price}`
    currentProductImage.src = chosenProduct.colors[0].img
    //assign new  product color
    currentProductColors.forEach((color, i) => {
      color.style.backgroundColor = chosenProduct.colors[i].code
    })
  })
})

currentProductColors.forEach((color, i) =>{
  color.addEventListener("click", ()=>{
    currentProductImage.src = chosenProduct.colors[i].img
  })
})

currentProductSizes.forEach((size, i) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach(size => {
      size.style.backgroundColor = "transparent"
      size.style.color = "black"
    })
    size.style.backgroundColor = "black"
    size.style.color = "white"
  })
})

