
function conversor(){
    let texto = document.getElementById('text').value
    let numero = parseInt(texto,10)
    //window.alert(texto.length + ' Caracteres')
    //window.alert(numero+1)

    if(texto.toString().length>8){//converter para string p conseguir a quantidade de caracteres;
    window.alert('The maximum size of characters that can be entered is 8!')
    }else{
        let decimal = (Number.parseInt(numero, 2)) 
        let octal = (decimal).toString(8)
        let hexadecimal = (decimal).toString(16)

        document.getElementById('decimal').innerHTML = `The number converted to decimal base is: ${decimal}<br>`
        document.getElementById('octal').innerHTML = `The number converted to octal base is: ${octal}<br>` 
        document.getElementById('hexadecimal').innerHTML = `The number converted to hexadecimal base is: ${hexadecimal}`

    }
}

function apenasBinario(e){
    var x=e.which||e.keycode;
    
    if((x>=48 && x<=49) || x==8 ||
        (x>=35 && x<=40)|| x==46)
        return true;
        else{
            return false;
        }
}

/*ASCII TABLE
48-57: Numbers
8: Backspace,
35: home key, 36: End key
37-40: Arrow keys
46: Delete key
*/