var myForm = document.form1;


function btnCheckFormClick(e) {
    var formPass = myForm.formPass;
    var formUrl = myForm.formUrl;

    if (txtAge.value == "" || txtName.value == "") {
        alert("Please complete all of the form");

        if (txtName.value == "") {
            txtName.focus();
        } else {
            txtAge.focus();
        }
    } else {
        alert("Thanks for completing the form " + txtName.value);
    }
}

function txtAgeBlur(e) {
    var target = e.target;

    if (isNan(target.value)) {
        alert("Please enter a valid age");
        target.focus();
        target.select();
    }
}
function txtNameChange(e) {
    alert("Hi " + e.target.value);
}
myForm.txtName.addEventListener("change", txtNameChange);
myForm.txtAge.addEventListener("blur", txtAgeBlur);
myForm.btnCheckForm.addEventListener("click", btnCheckFormClick);
