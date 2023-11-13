//funcion para actualizar el valor del input range | function to update the value of the range input
function updatenumbers(value) {
    document.getElementById('shift-value-cipher').innerHTML = value;
}
function updatenumbers2(value) {
    document.getElementById('shift-value-decipher').innerHTML = value;
}

//funcion para ocultar el div de cifrado | function to hide the cipher div
function change1(){
    document.getElementById("cipher-container").style.display = "none";
    document.getElementById("decipher-container").style.display = "block";
    document.getElementById("decipher-container").classList.add("move-left");
}

//funcion para ocultar el div de descifrado | function to hide the decipher div.
function change2(){
    document.getElementById("cipher-container").style.display = "block";
    document.getElementById("decipher-container").style.display = "none";
    document.getElementById("cipher-container").classList.add("move-right");
}   

//funcion para cifrar el texto | function to encrypt the text
function cipher(){

    //Variables
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                   "j", "k", "l", "m", "n", "ñ", "o", "p", "q", 
                   "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let text_cipher = [];
    
    //Obtener el texto y el numero de desplazamiento | Get the text and the number of displacement
    let text = document.getElementById('input-cipher').value.toLowerCase();
    let number = parseInt(document.getElementById('range-cipher').value);

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
                text_cipher.push(" ");
            }
            //Si el caracter es un numero, lo agrega al array | If the character is a number, it adds it to the array
            else if (isNaN(array_text[i]) == false) {
                text_cipher.push(array_text[i]);
            }
            else {
                //Obtener la posicion de la letra en el array | Get the position of the letter in the array
                let position = letters.indexOf(array_text[i]);
                //Obtener la nueva posicion de la letra | Get the new position of the letter
                let new_position = (position + number) % 27;
                //Agregar la letra cifrada al array | Add the encrypted letter to the array
                text_cipher.push(letters[new_position]);
            }
        } 
    }
    //Mostrar el texto cifrado | Show the encrypted text
    document.getElementById('output-cipher').value = text_cipher.join("");
}

//funcion para descifrar el texto | function to decrypt the text
function decipher(){
    //Variables
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                   "j", "k", "l", "m", "n", "ñ", "o", "p", "q", 
                   "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let text_decipher = [];

    //Obtener el texto y el numero de desplazamiento | Get the text and the number of displacement
    let text = document.getElementById('input-decipher').value.toLowerCase();
    let number = parseInt(document.getElementById('range-decipher').value);

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
                text_decipher.push(" ");
            }
            //Si el caracter es un numero, lo agrega al array | If the character is a number, it adds it to the array
            else if (isNaN(array_text[i]) == false) {
                text_decipher.push(array_text[i]);
            }
            else{
                //Obtener la posicion de la letra en el array | Get the position of the letter in the array
                let position = letters.indexOf(array_text[i]);
                //Obtener la nueva posicion de la letra | Get the new position of the letter
                let new_position = (position - number + 27) % 27;
                //Agregar la letra cifrada al array | Add the encrypted letter to the array
                text_decipher.push(letters[new_position]);
            }
        } 
    }
    //Mostrar el texto decifrado | Show the decrypted text
    document.getElementById('output-decipher').value = text_decipher.join("");
}