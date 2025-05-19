let projects = document.getElementsByClassName('project')

function arrowToggle(event){
    if (!event.target.children[0].className.includes('fa-arrow-down')){
        event.target.children[0].className = 'fa-solid fa-arrow-down'
        return
    }
    event.target.children[0].className = 'fa-solid fa-arrow-right'
}

for (let i=0 ; i< projects.length ; i++){
    projects[i].addEventListener('click', arrowToggle)
}

