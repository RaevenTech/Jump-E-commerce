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
        img: "./image/air-force-blk.png",
      },
      {
        code: "darkblue",
        img: "./image/air-force-blk.png",
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
        img: "./image/airjordan.png",
      },
      {
        code: "green",
        img: "./image/airjordan.png",
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
        img: "./image/blazer.png",
      },
      {
        code: "green",
        img: "./image/blazer.png",
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
        img: "./image/crater.png",
      },
      {
        code: "lightgray",
        img: "./image/crater.png",
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
        img: "./image/hippie2.png",
      },
      {
        code: "green",
        img: "./image/hippie.png",
      },
    ],
  },
];


menuItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    //changes the slides in the slide show
    sliderWrapper.style.transform = `translateX(${-100 * i}vw)`
  })
})



