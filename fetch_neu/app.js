document.querySelector('#button').addEventListener('click',LadeUsers);

function LadeUsers(){
    fetch('https://api.github.com/users')
    .then((res)=> res.json())
    .then((users)=>{
        let output='';

        users.forEach((users) => {
             output+=
            '<ul>'+'<li> ID:' + users.id    +'</li>' +
            '<li> name:' + users.login  +'</li>' +
            '</ul>';
        });
        document.querySelector('#text').innerHTML = output;
    })
    .catch((err) => console.log(err));
}
