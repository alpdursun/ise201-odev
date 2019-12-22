/* Menü Javascript Kodu */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 


/* Form Kontrolü İçin Gerekli Javascript Kodları */

function validateForm() {
  var x = document.forms["myForm"]["isim"].value;
  var y = document.forms["myForm"]["email"].value;
  var z = document.forms["myForm"]["mesaj"].value;

  var gecerli = 1;

  var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
	

  if (x == "") {
    alert("Lütfen İsim Bölmesini Doldurunuz");
    gecerli = 0;
  }

  if (regex.test(y)!=true) {
    alert("Lütfen Geçerli Bir E-Mail Adresi Giriniz");
    gecerli = 0;
  }

  if(z == " ") {
    alert("Lütfen Mesaj Bölmesini Doldurunuz");
    gecerli = 0;
  }

  if(gecerli==0){
    gecerli = 1;
    return false;
  }
}