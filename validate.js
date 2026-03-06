function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi < 1) {
    return false;
  } else {
    return true;
  }
}

function validateForm() {
 
    let sid = document.getElementById("sid").value.trim();
 
    
    if (sid == "") {
        alert("Please enter Student ID");
        return false;
    }
 
    
    if (sid.length != 10) {
        alert("Student ID must be 10 characters");
        return false;
    }
 
    
    let pattern = /^[0-9]+$/;
 
    if (!pattern.test(sid)) {
        alert("Student ID must contain only numbers (0-9)");
        return false;
    }
 
    return true;
}
	