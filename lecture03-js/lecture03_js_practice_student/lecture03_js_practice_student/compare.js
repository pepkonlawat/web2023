function comparenum(a, b) {
  Anum = parseInt(a.value);
  Bnum = parseInt(b.value);
  diff = Anum - Bnum;
  document.getElementById("d").value = Math.abs(diff);
  if (Anum > Bnum) {
    console.log("a>b");
    document.getElementById("c").value = "a>b";
  } else if (Bnum > Anum) {
    console.log("b>a");
    document.getElementById("c").value = "b>a";
  } else if ((Anum = Bnum)) {
    console.log("a=b");
    document.getElementById("c").value = "a=b";
  } else {
    console.log("try again");
  }
  console.log();
}
