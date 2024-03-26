console.log( document.getElementsByTagName('h1')[0].innerHTML = 'New Text')

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change(){
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text == 'New Text'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
    } else{
        header_text = 'Something Else'
    }
}

// Change Text Color via click event listener in JS
color_button.addEventListener('click', color_change)

// Adding New Button via JavaScript
let button = document.createElement('button')
let button_display = document.createElement('h2')
// Add inner text to the button
button.innerHTML = "I am alive!"
document.body.append(button)

button.addEventListener('click',function () {
    button_display.innerHTML = "More JavaScript Info Here..."
    document.body.append(button_display)
} )

// Grab copied text -- then place into clipboard
const source = document.querySelector('div.source');
source.addEventListener('copy', ( event ) => {
    console.log(ClipboardEvent)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
} )


// Grabbing Form Data From a Submit event
const form = document.querySelector('#testDataForm')
// console.log(form)

// Add event listener for submit event
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name');
    let query_last = document.querySelector('#last-name')
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;
    console.log(event)
    console.log(first_name, last_name)
    console.log(`This came from the query selector: ${query_first.value}, ${query_last.value}`)
} )
