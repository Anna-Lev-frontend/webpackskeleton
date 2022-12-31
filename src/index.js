import './style.css'
import eggBroken from '../assets/images/eggBroken.png';

const myIcon = new Image();
myIcon.src = eggBroken;

document.body.append(myIcon);

const div = document.createElement('div')
div.classList.add('div-class')
div.innerText = 'hello'
document.body.append(div)

const p = document.createElement('p')

p.innerText = 'hello World Anna'
document.body.append(p)
