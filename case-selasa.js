const prompt = require("prompt-sync")();

var nama, peran;
nama = prompt("nama : ");
peran = prompt("peran : ");

function input(nama, peran) {
  if (nama == "") {
    return console.log("nama harus diisi");
  }
  if (peran == "") {
    return console.log("pilih peranmu (penyihir / guard / werewolf :");
  }
  console.log("kamu " + nama + " berperan sebagai " + peran);
}

input(nama, peran);
