const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

const altBtn = document.querySelector('#altBtn');
altBtn.addEventListener('click', () => {alert ('Hello World')});

const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = "Hi, I'm red!";
p.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3"
h3.style.color = 'blue';

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = '1px solid black';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const divP = document.createElement('p');
divP.textContent = "Me too!";

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
div.appendChild(h1);
div.appendChild(divP);