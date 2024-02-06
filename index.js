const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// looping through buttons to get each button 
buttons.forEach(function (button) {
    console.log(button)
    //to track an event, we use addEventListener 
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target) // e.target.id = id name containing color name
        body.style.backgroundColor = e.target.id // here, the colour will get changed as per the css property we have mentioned 
    })
})