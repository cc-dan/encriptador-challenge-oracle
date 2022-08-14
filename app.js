const diccionario = {
    'e' : 'enter',
    'i' : 'imes',
    'a' : 'ai',
    'o' : 'ober',
    'u' : 'ufat'
}

const caracteres_especiales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?áéíóú]+/

function encriptador(entrada, desencriptar) {
    if (caracteres_especiales.test(entrada)) {
        alert("Los caracteres especiales y letras con acentos no están permitidas.")

        return;
    }
    if ( !(entrada === entrada.toLowerCase()) ) {
        alert("Se encontraron letras mayúsculas en el mensaje. Va a ser modificado.");
        entrada = entrada.toLowerCase();
    }
    
    let salida = "";

    for (let x = 0; x < entrada.length; x++) {
        let conversion = entrada[x];

        for (let letra in diccionario) {
            if (conversion == letra) {
                conversion = diccionario[letra];

                if (desencriptar) {
                    conversion = letra;
                    x += diccionario[letra].length-1;
                }

                break;
            }
        }

        salida += conversion;
    }

    document.getElementById('encriptador').textContent = salida;

    if (salida.length > 0) { 
        document.getElementById('placeholder').style = 'display:none';
        document.getElementById('copiar').style = 'display:inline';
    } else {
        document.getElementById('placeholder').style = 'display:inline-block';
        document.getElementById('copiar').style = 'display:none';
    }

    return salida;
}

function copiar(texto) {
    if (texto.length > 0) {
        navigator.clipboard.writeText(texto);
    }
}