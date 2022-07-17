const accordionContent = document.querySelectorAll('.accordion-content')
const span = document
console.log(accordionContent)

accordionContent.forEach((item, index) => {
 let header = item.querySelector("header") 
 

 header.addEventListener('click', () => {
  item.classList.toggle('open')
  let details = item.querySelector(".details")
  let span = item.querySelector("span")
  if (item.classList.contains("open")) {
   details.style.height = `${details.scrollHeight}px`
   span.style.fontWeight = "700"
   item.querySelector('i').classList.replace('fa-angle-up', 'fa-angle-down')
  }
  else {
   details.style.height = "0px"
   span.style.fontWeight = "400"
   item.querySelector('i').classList.replace('fa-angle-down', 'fa-angle-up')
  }
  removeOpen(index)
 })
})

function removeOpen(index1) {
 accordionContent.forEach((item2, index2) => {
  if (index1 != index2) { 
   item2.classList.remove("open");
   let heading = item2.querySelector("span")
   let deets = item2.querySelector('.details')
   deets.style.height = "0px"
   heading.style.fontWeight = "400"
   item2.querySelector('i').classList.replace('fa-angle-down', 'fa-angle-up')
  }
 })
}