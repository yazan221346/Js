const opt = document.querySelector('#opt')

date = [];
fetch('Lander.json')
    .then((res) => res.json())
    .then((land) => {
        date = land;
        let output = "";
        date.forEach((d) => {
            output +=
                '<option value="' + d.continent + '">' + d.continent + '</option>'


        });
        opt.innerHTML += output;
    })