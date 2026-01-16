setTimeout(()=>{
    let elem = document.createElement('div')
elem.innerHTML = 'Hi'
document.body.appendChild(elem)

elem.style.backgroundColor = 'red'
elem.style.color = 'white'
},3000,null)