document.querySelector('#Button1').addEventListener('click',loadUser);
document.querySelector('#Button2').addEventListener('click',loadUsers);
function loadUser(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','User.JSON',true);
    console.log(xhr);
    xhr.onload = function(){

        if (this.status == 200){
            let user = JSON.parse(this.responseText);
            let output='';
            output+=
            '<ul>'+'<li> ID:' + user.id+'</li>' +
            '<li> name:' + user.Name+'</li>' +
            '<li> email:' + user.Email+'</li>' +
            '</ul>';

            document.querySelector('#user').innerHTML =output;
        }
    }
    xhr.send();
}
function loadUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','Users.JSON',true);
    console.log(xhr);
  
    xhr.onload = function(){
        if (this.status == 200){
            let users = JSON.parse(this.responseText);
            let output='';
            for(i in users){
            output+=
            '<ul>'+'<li> ID:' + users[i].id+'</li>' +
            '<li> name:' + users[i].Name+'</li>' +
            '<li> email:' + users[i].Email+'</li>' +
            '</ul>';
            }

            document.querySelector('#user').innerHTML =output;
        }
    }

    xhr.send();
}