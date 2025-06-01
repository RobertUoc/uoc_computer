/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap';

const button = document.getElementById('toggleButton');

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

/**
 *  Canvi Menu.
 */
button.addEventListener('click', () => { 
  document.querySelector(".menu").classList.toggle("active");  
});


/**
 *  Contact
 */
const checkboxes = document.getElementsByName('checkbox');
const submitButton = document.querySelector('.btn-submit');

Array.from(checkboxes).forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (document.getElementById('aceptoPolitica').checked && document.getElementById('aceptoComercial').checked) {
                submitButton.classList.remove('disabled');
                submitButton.classList.remove('btn-secondary');
                submitButton.classList.add('enabled');
                submitButton.classList.add('btn-primary');
            } else {
                submitButton.classList.remove('enabled');
                submitButton.classList.remove('btn-primary');
                submitButton.classList.add('disabled');
                submitButton.classList.add('btn-secondary');
            }
        });
});

document.getElementById('nombre').addEventListener('input', function() {  
  const feedback = document.querySelector('.invalid-nombre');  
        if (this.validity.valid) {
            feedback.classList.add('hidden');
            feedback.classList.remove('block');
        } else {
            feedback.classList.remove('hidden');
            feedback.classList.add('block');
        }
});

document.getElementById('correo').addEventListener('input', function() {  
  const feedback = document.querySelector('.invalid-correo');
        if (this.validity.valid) {
            feedback.classList.add('hidden');
            feedback.classList.remove('block');
        } else {
            feedback.classList.remove('hidden');
            feedback.classList.add('block');
        }
});






















