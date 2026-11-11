document.querySelector('#btn').addEventListener('click',LadeUsers);
const tch = document.querySelector('#tch');
function LadeUsers(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((users)=>{
    tch.id = 'output';
        let output='';

        users.forEach((users) => {
             output+=
            '<ul>'+'<li> ID:' + users.id    +'</li>' +
            '<li> title:' + users.title  +'</li>' +
            '</ul>';
        });
        document.querySelector('#output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}