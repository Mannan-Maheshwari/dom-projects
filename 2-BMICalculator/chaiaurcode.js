const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  result();
})


function result(){
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const re = document.querySelector('#results');
  if (isNaN(height) || height <= 0) {
    re.innerHTML = `Please give a valid height ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    re.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000));
  re.innerHTML = `<span>${bmi.toFixed(2)}</span>`;}
}
