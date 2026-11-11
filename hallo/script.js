const H1 = document.querySelector('h1')
document.querySelector("#myButton").addEventListener('click', drucken); 
let vis = false;

function drucken() {
if (vis) {
    H1.innerHTML = '';
    vis = false;
}else {
    
fetch('Users.json')
.then(response => response.json())
.then(data => {
    data.forEach(user => {
        H1.innerHTML += `<br/> Name: ${user.name}, id: ${user.id}`;
    });
    
})

.catch(error => console.error('Error fetching data:', error));
}
}
