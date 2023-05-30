    // JavaScript

    const boxes = document.querySelectorAll(".color-box");

// Recorrer cada caja de colores y agregar un evento de cambio de color
boxes.forEach((box, index) => {
    // Agregar evento de cambio de color al hacer clic en la caja
    box.addEventListener('click', () => {
      // Cambiar el color de fondo de la caja al azar
      const randomColor = getRandomColor();
      box.style.backgroundColor = randomColor;
  
      // Obtener el elemento de audio correspondiente a la caja
      const audio = document.getElementById(`audio${index + 1}`);
  
      // Reproducir el sonido
      audio.play();
    });
  });
    function changeColor() {
    this.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    boxes.forEach(function(box) {
    box.addEventListener("click", changeColor);
    });


        
        
        function cambiarColor() {
            var elemento = document.body;
            var colores = ["#ff9900", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
            var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            elemento.style.backgroundColor = colorAleatorio;
        
            var cambiarColorBtn = document.getElementById("cambiarColorBtn");
            cambiarColorBtn.style.border = "2px solid " + colorAleatorio;
            cambiarColorBtn.style.fontFamily = "Verdana, sans-serif";
        }
        


    function mostrarMensaje() {
        alert("¡Hola! Espero que te diviertas. Tambien hay un sector de cuentos cortos que te puede interesar");
    }

    
