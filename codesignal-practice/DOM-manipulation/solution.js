


 const infoDetails = () => {
    
    //retrive form inputs
    let form = document.forms["userform"];
    let fname = form["fname"].value;
    let lname = form["lname"].value;
    let welcome = `Welcome ${fname} ${lname} confirm personal info below is correct`
    document.getElementById("welcome").style.color = "blue";
    document.getElementById("welcome").innerHTML = welcome;
    // let newP = document.createElement("p");
    // newP.innerHTML = welcome;
    // newP.style.color = "blue";
    // document.body.appendChild(newP);
    let dob = form["dob"].value
    let address = form["address"].value;
    let city = form["city"].value;
    let state = form["state"].value;
    let zipCode = form["zip"].value;
    let email = form["email"].value;
   


    let newUserInfo = [fname, lname, dob,address, city, state, zipCode, email,]
    let personalInfo = ''
    // for loop function that list userinfo
    for(i = 0; i<newUserInfo.length; i++){
        personalInfo += `<li>${newUserInfo[i]}</li>`
    }
    document.getElementById("info").innerHTML = `<ul>${personalInfo}</ul>`;
 }

