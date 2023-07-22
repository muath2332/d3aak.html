// Keeping state in DOM is NOT recommended, but here we go...
var count = document.getElementById('count');

function plusOne() {
  var number = Number(count.textContent);
  number++;
  count.textContent = number.toString();
}