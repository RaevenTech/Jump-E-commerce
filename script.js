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
        img: "./images/air-force-blk.png",
      },
      {
        code: "darkblue",
        img: "./images/air-force-blk.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/airjordan.png",
      },
      {
        code: "green",
        img: "./images/airjordan.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer.png",
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
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater.png",
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
        img: "./images/hippie2.png",
      },
      {
        code: "green",
        img: "./images/hippie.png",
      },
    ],
  },
];

let chosenProduct = products[0]

const currentProductImage = document.getElementById("product_img")
const currentProductTitle = document.getElementById("product_title")
const currentProductPrice = document.getElementById("product_price")
const currentProductColor = document.querySelectorAll("#color")
const currentProductSize = document.querySelectorAll("#size")
console.log(currentProductImage)

menuItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    //changes the slides in the slide show
    sliderWrapper.style.transform = `translateX(${-100 * i}vw)`

    //change the chosen product to display
    chosenProduct = products[i]

    //change text of curent product
    currentProductTitle.textContent = chosenProduct.title
    //change price of chosen product
    currentProductPrice.textContent = `€${chosenProduct.price}`
    currentProductImage.src = chosenProduct.colors[0].img
    
  })
})



