let diameter = 0
let answer = 0

document.getElementById('button').addEventListener('click', areacircumference)

function areacircumference () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  answer = ((Math.PI * diameter * diameter) / 4)

  document.getElementById('text1').innerHTML = Math.round(answer)
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  answer = (Math.PI * diameter)
  document.getElementById('text2').innerHTML = Math.round(answer)
}
