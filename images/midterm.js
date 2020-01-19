window.onload = () =>{
    console.log('ready!')
    var rad = document.getElementsByName('colorButton');
    for (i=0;i<rad.length;i++){
        rad[i].addEventListener('click', colorChoice);
    }
}

var colorChoice = (event) =>{
            alert("This color you chose is " + event.target.value);
            document.body.style.backgroundColor = event.target.value; 
}