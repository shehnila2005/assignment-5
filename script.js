let r = 0
let answer = 0
document.getElementById('button').addEventListener('click', area)
document.getElementById('button2').addEventListener('click', circumference)
function area () {
  r = document.getElementById('input').value
  r = parseInt(r)
  answer = Math.PI * (r * r)
  document.getElementById('answer').innerHTML = Math.round(answer)
}
function circumference () {
  r = document.getElementById('input2').value
  r = parseInt(r)
  answer = 2 * r
  document.getElementById('answer').innerHTML = Math.round(answer)
}
