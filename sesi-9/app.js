function tambahNamaDepan(name, tambahan) {
  return tambahan + " " + name;
}

function tambahNamaBelakang(name, tambahan) {
  return name + " " + tambahan;
}

function tambahNamaDepanBelakang(name, tambahanDepan, tambahanBelakang) {
  tambahDepan = tambahNamaDepan(name, tambahanDepan);
  fullName = tambahNamaBelakang(tambahDepan, tambahanBelakang);

  return fullName;
}
