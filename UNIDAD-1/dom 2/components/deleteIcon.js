const checkComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon'); // icono inicial
    i.addEventListener('click', color);
    return i;
}

const color =(evento)=>{     
    const element = evento.target;

    // cambia entre check activo y normal
    element.classList.toggle('fas');
    element.classList.toggle('far');

    // cambia el color
    if(element.classList.contains('fas')){
        element.style.color = "green";
    }else{
        element.style.color = "";
    }
}

export default checkComplete;