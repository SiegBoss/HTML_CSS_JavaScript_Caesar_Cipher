//funcion para actualizar el valor del input range | function to update the value of the range input
function updatenumbers(value) {
    document.getElementById('container-div__div-text').innerHTML = value;
}

//funcion para actualizar el valor del input text | function to update the value of the text input
function updatetext(value){
    let text = " ";
    let i=0;
    if (value == "Ingrese un Texto" && i==0) {
        document.getElementsByClassName('container-div__input-entry')[0].value = text;
        i++;
    }
}

//funcion para cifrar el texto | function to encrypt the text
function cipher(){

    //Variables
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                   "j", "k", "l", "m", "n", "ñ", "o", "p", "q", 
                   "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let textCipher = [];
    
    //Obtener el texto y el numero de desplazamiento | Get the text and the number of displacement
    let text = document.getElementsByClassName('container-div__input-entry')[0].value.toLowerCase();
    let number = parseInt(document.getElementsByClassName('container-div__div-input')[0].value);

    //Si el texto esta vacio, muestra un mensaje | If the text is empty, show a message
    if(text == "") {
        alert("Por favor ingrese un texto");
    } 
    else {
        //Obtener la longitud del texto y convertirlo en un array | Get the length of the text and convert it to an array
        let length_text = text.length;
        let array_text = text.split("");

        //Recorrer el array y cifrar el texto | Traverse the array and encrypt the text
        for(let i = 0; i < length_text; i++) {

            //Si el caracter es un espacio, lo agrega al array | If the character is a space, it adds it to the array
            if(array_text[i] == " ") {
                textCipher.push(" ");
            }
            //Si el caracter es un numero, lo agrega al array | If the character is a number, it adds it to the array
            else if (isNaN(array_text[i]) == false) {
                textCipher.push(array_text[i]);
            }
            else {
                //Obtener la posicion de la letra en el array | Get the position of the letter in the array
                let position = letters.indexOf(array_text[i]);
                //Obtener la nueva posicion de la letra | Get the new position of the letter
                let newPosition = (position + number) % 27;
                //Agregar la letra cifrada al array | Add the encrypted letter to the array
                textCipher.push(letters[newPosition]);
            }
        } 
    }
    //Mostrar el texto cifrado | Show the encrypted text
    document.getElementById('container-div__input-cipher').value = textCipher.join("");
}