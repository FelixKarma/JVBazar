var combinaisonTouches = [];
var solution = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowUp', 'ArrowRight'];

document.addEventListener('keydown', function(event) {
  combinaisonTouches.push(event.code);
  if (combinaisonTouches.length > solution.length) {
    combinaisonTouches.shift();
  }
  if (JSON.stringify(combinaisonTouches) === JSON.stringify(solution)) {
    window.location.href = 'secret4.html';
  }
});