// TUGAS 1
let angkaAwal = Number(prompt("Masukkan Nilai Rupiah"));
let angkaAkhir = Number(
  prompt(
    `Rp${angkaAwal}, apakah benar? Jika tidak, silakan refresh laman. Jika iya, masukkan nilai yang ingin dijumlahkan.`
  )
);
const hasilAkhir = angkaAwal + angkaAkhir;

alert(`Hasil penjumlahannya adalah Rp${hasilAkhir}`);

// TUGAS 2
let hari = new Date().getDay();
switch (hari) {
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = "Selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "Jumat";
    break;
  case 6:
    hari = "Sabtu";
    break;
  case 0:
    hari = "Minggu";
    break;
  default:
    hari = "Kiamat";
    break;
}
alert(`hari ini adalah hari ${hari}`);
