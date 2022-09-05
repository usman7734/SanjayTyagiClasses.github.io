function colorChange()    /* For Background color change  NightMode*/
{
    // alert("Function was called");
    console.log("Color function calling");
    let body1=document.getElementById("body");
    console.log(body1);
    body1.classList.toggle("nightmode");

}







function validate()  /* For validating of form in contact.html*/
{
    console.log("Function is calling....");
    let name=document.getElementById("name");
    let mobile1=document.getElementById("mob");
    // console.log(name.value.length);
    if(name.value.length <4)
    {
        document.getElementById("nameError").innerHTML="! Enter Your Full Name";
        return false;
        // console.log(mob);
    }
    else if(mobile1.value.length <10)
    {
        document.getElementById("nameError").innerHTML="";

        // console.log("moile number checking");
        document.getElementById("mobileError").innerHTML="! Enter Your 10 Digit Mobile Number";
        return false
    }
    else{
        document.getElementById("nameError").innerHTML="";
        document.getElementById("mobileError").innerHTML="";
        return true;

    }
}