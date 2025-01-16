let indexBanner = 0;

changeBackground();

function nextBanner() {
  indexBanner = indexBanner + 1;
  changeBackground();
}

// function to change background banner
function changeBackground() {
  let bannerList = document.getElementsByClassName("img-slideshow");
  console.log(bannerList.length);

  console.log(indexBanner);
  if (indexBanner >= bannerList.length - 1) {
    // reset indexBanner
    indexBanner = 0;
  }

  // looping to change background
  for (let i = 0; i < bannerList.length; i++) {
    if (i == indexBanner) {
      bannerList[i].style.display = "block";
    } else {
      bannerList[i].style.display = "none";
    }
  }
}
setInterval(nextBanner, 3000);
// Function untuk form validation
function formValidation() {
  let nameInput = document.getElementById("name-input").value;
  let dateInput = document.getElementById("date-input").value;
  let genderInput = document.getElementById("gender-input").value;
  let messageInput = document.getElementById("message-input").value;

  if (nameInput == "") {
    alert("Nama tidak boleh kosong");
    return false;
  } else {
    document.getElementById("output-name").innerHTML = nameInput;
  }
  if (dateInput == "") {
    alert("Tanggal Lahir tidak boleh kosong");
    return false;
  } else {
    document.getElementById("output-date").innerHTML = dateInput;
  }
  if (genderInput == "") {
    alert("Jenis Kelamin tidak boleh kosong");
    return false;
  } else {
    document.getElementById("output-gender").innerHTML = genderInput;
  }
  if (messageInput == "") {
    alert("Pesan tidak boleh kosong");
    return false;
  } else {
    document.getElementById("output-message").innerHTML = messageInput;
  }
}
