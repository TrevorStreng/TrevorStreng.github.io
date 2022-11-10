const alerting = function() {
  alert('Hello, world!');
}

const textBox = document.getElementById('textBox')
const boring = document.getElementById('boring')
const fancy = document.getElementById('fancy')

const bigger = function() {
  textBox.style.fontSize = "2em";
}

const styles = function() {
  textBox.style.fontWeight = "bold";
  textBox.style.color = "blue";
  textBox.style.textDecoration = "underline";
  boring.checked = false;
}
const unstyles = function() {
  textBox.style.fontWeight = 'normal'
  textBox.style.color = "black";
  textBox.style.textDecoration = "none";
  boring.checked = true;
  fancy.checked = false;
}

const upper = function() {
  textBox.value = textBox.value.toUpperCase();
  let str = textBox.value;
  let parts = str.split('.')
  for(let i = 0; i < parts.length; i++) {
    parts[i] += '-Moo. '
  }
  str = parts.join('');
  textBox.value = str
}