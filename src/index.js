import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

//lodash now is imported by this script

document.body.appendChild(component());