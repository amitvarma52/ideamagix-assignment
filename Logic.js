const showDescription= document.querySelectorAll(".description")
for(let element of showDescription){
    element.addEventListener('click',function(e) {
    if(e.currentTarget.children[0].textContent=="+"){
        e.currentTarget.children[0].textContent="-"
        e.currentTarget.children[2].style.display='block'
    }else{
        e.currentTarget.children[0].textContent="+"
        e.currentTarget.children[2].style.display='none' 
    }
})
}

// carousel 
const carouselParent=document.querySelectorAll('.information-cards')
for (const carousel of carouselParent) {
    const allButton=carousel.querySelectorAll("button")

   function deleteLoop() {
      for(let button of allButton){
       button.style.backgroundColor="grey"    
     }
    
  }
  allButton[0].addEventListener("click",function(e) {
    deleteLoop()
     const allDivs=this.parentNode.querySelectorAll(".content")
     for(let div of allDivs){
         div.style.display="none"
     }
    allDivs[0].style.display="flex"
    this.style.backgroundColor="blue"
})
carousel.children[6].addEventListener("click",function(e) {
    deleteLoop()
     const allDivs=this.parentNode.querySelectorAll(".content")
     for(let div of allDivs){
         div.style.display="none"
     }
    allDivs[1].style.display="flex"
    this.style.backgroundColor="blue"
})
carousel.children[7].addEventListener("click",function(e) {
    deleteLoop()
     const allDivs=this.parentNode.querySelectorAll(".content")
     for(let div of allDivs){
         div.style.display="none"
     }
    allDivs[2].style.display="flex"
    this.style.backgroundColor="blue"
})
}


