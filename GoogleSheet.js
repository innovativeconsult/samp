const scriptURL = 'https://script.google.com/macros/s/AKfycbwC3lkSqfLVcQyU--SDAbbkXYJO8f1mioynM5FBQubG42OsqOt9bUyTAw4OB0B9H3Lr/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

 document.getElementById('rendering').style.display="block";


  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thank you! Your response has been submitted Successfully.Click ok to complete");
      window.location.reload(); 
    })
    .catch(error => console.error('Error!', error.message));
});


// window.onload = function () {
//   const scriptURL = 'https://script.google.com/macros/s/AKfycbwC3lkSqfLVcQyU--SDAbbkXYJO8f1mioynM5FBQubG42OsqOt9bUyTAw4OB0B9H3Lr/exec';
//   const form = document.forms['contact-form'];

//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//       .then(response => {
//         alert("Thank you! Form is submitted");
//         window.location.reload();
//       })
//       .catch(error => console.error('Error!', error.message));3
//   });
// };

