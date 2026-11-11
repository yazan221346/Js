document.querySelector('#button').addEventListener('click',loadText);
function loadText(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','Beispieltext.txt',true);
    console.log(xhr);
    xhr.onload = function(){

        if (this.status == 200){
            document.querySelector('#text').innerHTML = this.responseText;
        }
    }
    xhr.send();
}