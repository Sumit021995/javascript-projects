const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);
// this use case will give you empty result as no entry is there before submission

form.addEventListener('submit', function (s) {
  s.preventDefault();
  let height = (document.querySelector('#height').value);
  let weight = (document.querySelector('#weight').value);
  let results = document.querySelector('#results');
 
  if (height === '' ||  weight === '' || height < 0 || isNaN(height) || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Please enter a valid height and weight'
  } else {
  height = parseInt(height);
  weight = parseInt(weight);
    let bmi = (weight/((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
});
