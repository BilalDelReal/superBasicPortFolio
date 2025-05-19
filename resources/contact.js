let inputs = document.getElementsByClassName('inputs');

console.log(inputs)
function checkValue(event){
    console.log(event.target)
    if(!event.target.value){
        event.target.classList.add('red-border')
        event.target.classList.remove('hover')
        event.target.parentElement.className = 'input'
    }else{
        event.target.classList.remove('red-border')
        event.target.classList.add('hover')
        event.target.parentElement.className = ''


    }

}
for (let i=0; i< inputs.length; i++){
    inputs[i].addEventListener('blur', checkValue)
}
