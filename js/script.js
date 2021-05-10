function validateForm() {

    var errorMsg = new Array();

    var valid = true;

    var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    var pfromat = /^[0-9]{3}(\-[0-9]{3})\-[0-9]{4}?$/;

    var fn=document.getElementById('fullname').value;
    var email=document.getElementById('email').value;
    var pwd=document.getElementById('password').value;
    var organization = document.getElementById('organization').value;
    var country = document.getElementById('country').value;
    var phone = document.getElementById('phone').value;

    if (!(fn.length > 1)) {
        document.getElementById('fullname').style.borderColor = "red";
        errorMsg.push("Missing full name");
        valid = false;
    }

    if (email.match(mailformat) === null) {
        document.getElementById('email').style.borderColor = "red";
        errorMsg.push("Invalid or missing email address.");
        valid = false;
    }

    if (!(pwd.length>10&&pwd.length<20)) {
        document.getElementById('password').style.borderColor = "red";
        errorMsg.push("Password must be between 10 and 20 characters.");
        valid = false;
    } else {
        if (pwd.search(/[a-z]/) < 1) {
            document.getElementById('password').style.borderColor = "red";
            errorMsg.push("Password must contain at least one lowercase character.");
            valid = false;
        }
        if (pwd.search(/[A-Z]/) < 1) {
            document.getElementById('password').style.borderColor = "red";
            errorMsg.push("Password must contain at least one uppercase character.");
            valid = false;
        }
        if (pwd.search(/[0-9]/) < 0) {
            document.getElementById('password').style.borderColor = "red";
            errorMsg.push("Password must contain at least one digit.");
            valid = false;
        }
    }

    if (!(organization.length>1)) {
        document.getElementById('organization').style.borderColor = "red";
        errorMsg.push("Missing attendee organization.");
        valid = false;
    }

    if ((country.length===0)) {
        document.getElementById('country').style.borderColor = "red";
        errorMsg.push("Missing attendee country.");
        valid = false;
    }


    if ((phone.length>=1)) {
      if(phone.match(pfromat)===null){
          document.getElementById('phone').style.borderColor = "red";
          errorMsg.push("Wring phone number provided.");
          valid = false;
      }
    } else {
        document.getElementById('phone').style.borderColor = "red";
        errorMsg.push("Wring phone number provided.");
        valid = false;
    }


    var messageHtml = "";

    errorMsg.forEach(function (message) {
        messageHtml += "<li>" + message + "</li>";
    });

    document.getElementById("error").innerHTML = messageHtml;


    return valid;

}