const containerCipher = document.getElementById("cipher-container");
const containerDecipher = document.getElementById("decipher-container");
const button = document.querySelector('.theme-toggle');
const body = document.body;

//Funcion para cambiar entre cifrado y descifrado | Function to change between cipher and decipher
function toggleMode(mode) {;
    //Agregar la clase fade a los contenedores | Add the fade class to the containers
    //'fade' es una clase CSS que aplica una animación de desvanecimiento | 'fade' is a CSS class that applies a fade animation
    containerCipher.classList.add('fade');
    containerDecipher.classList.add('fade');

    //Esperar a que la animación termine antes de cambiar el modo | Wait for the animation to finish before changing the mode
    if (mode === 'decipher') {

        //'hidden' es una clase CSS que oculta el elemento | 'hidden' is a CSS class that hides the element
        containerCipher.classList.add('hidden');
        containerDecipher.classList.remove('hidden');

    } 
    else {
        containerDecipher.classList.add('hidden');
        containerCipher.classList.remove('hidden');
    }
}

//Funcion para cambiar el tema | Function to change the theme
function toggleTheme() {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        button.textContent = '☀️ Modo Claro';

    } 
    else {
        button.textContent = '🌑 Modo Oscuro';
    }
}

//Funcion para actualizar el valor del input range | Function to update the value of the range input
function updateNumbers(value) {
    document.getElementById('shift-value-cipher').innerHTML = value;
}

function updateNumbers2(value) {
    document.getElementById('shift-value-decipher').innerHTML = value;
}

//Funcion para ocultar el div de cifrado | Function to hide the cipher div
function change1() {

    //"none" es un valor CSS que oculta el elemento | "none" is a CSS value that hides the element
    //"block" es un valor CSS que muestra el elemento como un bloque | "block" is a CSS value that shows the element as a block
    //"move-left" es una clase CSS que aplica una animación de movimiento a la izquierda | "move-left" is a CSS class that applies a left movement animation
    containerCipher.style.display = "none";
    containerDecipher.style.display = "block";
    containerDecipher.classList.add("move-left");
}

//Funcion para ocultar el div de descifrado | Function to hide the decipher div.
function change2() {

    //"moving-right" es una clase CSS que aplica una animación de movimiento a la derecha | "moving-right" is a CSS class that applies a right movement animation
    containerCipher.style.display = "block";
    containerDecipher.style.display = "none";
    containerCipher.classList.add("move-right");

}

//Funcion para cifrar el texto | Function to encrypt the text
function cipher() {

    //Variables
    let letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i",
                    "j", "k", "l", "m", "n", "ñ", "o", "p", "q",
                    "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

    let textCipher = [];

    //Obtener el texto y el numero de desplazamiento | Get the text and the number of displacement
    let text = document.getElementById('input-cipher').value.toLowerCase();
    let number = parseInt(document.getElementById('range-cipher').value);

    //Si el texto esta vacio, muestra un mensaje | If the text is empty, show a message
    if (text == "") {

        alert("Por favor ingrese un texto");

    }
    else {

        //Obtener la longitud del texto y convertirlo en un array | Get the length of the text and convert it to an array
        let lengthText = text.length;
        let arrayText = text.split("");

        //Recorrer el array y cifrar el texto | Traverse the array and encrypt the text
        for (let i = 0; i < lengthText; i++) {

            //Si el caracter es un espacio, lo agrega al array | If the character is a space, it adds it to the array
            if (arrayText[i] == " ") {

                textCipher.push(" ");

            }
            //Si el caracter es un numero, lo agrega al array | If the character is a number, it adds it to the array
            else if (isNaN(arrayText[i]) == false) {

                textCipher.push(arrayText[i]);

            }
            else {

                //Obtener la posicion de la letra en el array | Get the position of the letter in the array
                let position = letters.indexOf(arrayText[i]);
                //Obtener la nueva posicion de la letra | Get the new position of the letter
                let new_position = (position + number) % 27;
                //Agregar la letra cifrada al array | Add the encrypted letter to the array
                textCipher.push(letters[new_position]);

            }
        }
    }

    //Mostrar el texto cifrado | Show the encrypted text
    document.getElementById('output-cipher').value = textCipher.join("");
}

//funcion para descifrar el texto | function to decrypt the text
function decipher() {

    //Variables
    let letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i",
                    "j", "k", "l", "m", "n", "ñ", "o", "p", "q",
                    "r", "s", "t", "u", "v", "w", "x", "y", "z" 
                ];

    let textDecipher = [];

    //Obtener el texto y el numero de desplazamiento | Get the text and the number of displacement
    let text = document.getElementById('input-decipher').value.toLowerCase();
    let number = parseInt(document.getElementById('range-decipher').value);

    //Si el texto esta vacio, muestra un mensaje | If the text is empty, show a message
    if (text == "") {

        alert("Por favor ingrese un texto");
        
    }
    else {

        //Obtener la longitud del texto y convertirlo en un array | Get the length of the text and convert it to an array
        let lengthText = text.length;
        let arrayText = text.split("");

        //Recorrer el array y cifrar el texto | Traverse the array and encrypt the text
        for (let i = 0; i < lengthText; i++) {

            //Si el caracter es un espacio, lo agrega al array | If the character is a space, it adds it to the array
            if (arrayText[i] == " ") {

                textDecipher.push(" ");

            }
            //Si el caracter es un numero, lo agrega al array | If the character is a number, it adds it to the array
            else if (isNaN(arrayText[i]) == false) {

                textDecipher.push(arrayText[i]);

            }
            else {

                //Obtener la posicion de la letra en el array | Get the position of the letter in the array
                let position = letters.indexOf(arrayText[i]);
                //Obtener la nueva posicion de la letra | Get the new position of the letter
                let new_position = (position - number + 27) % 27;
                //Agregar la letra cifrada al array | Add the encrypted letter to the array
                textDecipher.push(letters[new_position]);

            }
        }
    }
    
    //Mostrar el texto decifrado | Show the decrypted text
    document.getElementById('output-decipher').value = textDecipher.join("");
}