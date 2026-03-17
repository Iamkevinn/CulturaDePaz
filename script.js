const cards = document.querySelectorAll('.card')
const timeline = document.getElementById('timeline')

let dragged = null

cards.forEach(card => {

card.addEventListener('dragstart', function(){
dragged = card
})

})

timeline.addEventListener('dragover', function(e){
e.preventDefault()
})

timeline.addEventListener('drop', function(){

timeline.appendChild(dragged)

})

function checkOrder(){

const items = timeline.querySelectorAll('.card')

let correct = true

items.forEach((item, index)=>{

const expected = index + 1
const order = item.dataset.order

if(order == expected){
item.classList.add("correct")
item.classList.remove("incorrect")
}else{
item.classList.add("incorrect")
item.classList.remove("correct")
correct = false
}

})

const result = document.getElementById("result")

if(correct){
result.innerText = "¡Correcto! Has reconstruido la secuencia histórica."
}else{
result.innerText = "Algunos eventos están fuera de orden. Intenta nuevamente."
}

}