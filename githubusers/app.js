document.querySelector('#Button').addEventListener('click',LadeUsers);

function LadeUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','users.json',true);
    console.log(xhr);
  
    xhr.onload = function(){
        if (this.status == 200){
            let users = JSON.parse(this.responseText);
            let output='';
            for(i in users){
            output+=
            '<ul>'+'<li> ID:' + users[i].id+'</li>' +
            '<li> name:' + users[i].login+'</li>' +
            '<li> usertype:' + users[i].type+'</li>' +
            '</ul>';
            }

            document.querySelector('#users').innerHTML =output;
        }
    }

    xhr.send();
    }
