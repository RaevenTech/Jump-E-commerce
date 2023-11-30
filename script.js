const sliderWrapper = document.getElementById("slider_wrapper")
const menuItem = document.querySelectorAll(".menu_item")
//console.log(menuItem)

menuItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    sliderWrapper.style.transform = `translateX(${-100 * i}vw)`
  })
})

