const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);
// this use case will give you empty result as no entry is there before submission

form.addEventListener('submit', function (s) {
  s.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  }
});
