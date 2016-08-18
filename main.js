
var myForm = document.form1;

function btnCheckFormClick(e) {
  var pass = myForm.pass;
  var url = myForm.url;

  if (pass.value == "" || url.value == "") {
    alert("Please complete all of form");

    if (pass.value == "") {
      pass.focus();
    } else {
      url.focus();
    }
  } else {
    alert("Thanks for completing the form!");
  }
}

function urlBlur(e) {

}
