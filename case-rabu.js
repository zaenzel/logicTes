function faktorial2(nilai) {
  var hasil = 1;
  for (let i = nilai; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
}

function faktorial(nilai) {
  if (nilai === 0) return 1;
  return nilai * faktorial(nilai - 1);
}

console.log(faktorial(5));
console.log(faktorial2(5));
