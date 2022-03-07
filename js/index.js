var getAkanName = function () {
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var date = document.getElementById("date").value;
  var birthDate = new Date(date);
  var day = birthDate.getDay();
  var month = birthDate.getMonth();
  var gender = document.getElementsByName("gender");

  if (date === "" || day > 31 || day === 0 || day < 0 || month > 12 || month < 0 || month === 0) {
    document.getElementById("response").innerHTML = "Please enter a valid date";
  } else {
    for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked && gender[i].value === 'male') {
        let maleResponse = "You were born on a " + weekDays[day] + " Your Akan name is " + maleNames[day];
        document.getElementById("response").innerHTML = maleResponse;
        break;
      } else if (gender[i].checked && gender[i].value === 'female') {
        let femaleResponse = "You were born on a " + weekDays[day] + " Your Akan name is " + femaleNames[day];
        document.getElementById("response").innerHTML = femaleResponse;
        break;
      } else {
        document.getElementById("response").innerHTML = "Please select your gender!";
      }
    }
  }

  document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
  });
}

function clearForm() {
  document.getElementById("form").reset();
  window.location.reload();

}
