let color = '';
document.addEventListener('keydown',
function (event) {
    document.getElementById('aColor').style.border = "2px solid black"
    if (event.key === 'a') {
            color = "green";
            document.getElementById('aColor').style.backgroundColor = "green";
    }else if(event.key === 's') {
            color = "yellow";
            document.getElementById('aColor').style.backgroundColor = "yellow";
    }else if(event.key === 'd'){
            color = "red";
            document.getElementById('aColor').style.backgroundColor = "red";
    }else {
        color = '';
        document.getElementById('aColor').style.backgroundColor = 'white';
        document.getElementById('aColor').style.border = "2px solid lightgray"
    }
});
const pintar = (idDiv,color) => document.getElementById(idDiv).style.backgroundColor = color;
document.querySelectorAll('.div').forEach(element => {
    element.addEventListener("click", e => {
        const idDiv = e.target.getAttribute('id');
        e.currentTarget.style.border = (color === "white" || color === "")?'4px solid lightgray':'4px solid black';
        pintar(idDiv,color);
    });
});
