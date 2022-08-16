function valid(){
    var fname=document.forms["frm"]["fname"].value;
    var lname=document.forms["frm"]["lname"].value;
    /var date=document.forms["frm"]["date"].value;/
    

    var email=document.forms["frm"]["email"].value;
    var mobno=document.forms["frm"]["mobno"].value;
    var gender=document.forms["frm"]["gender"].value;
    var address=document.forms["frm"]["address"].value;
    var city=document.forms["frm"]["city"].value;
    var pincode=document.forms["frm"]["pincode"].value;
    var state=document.forms["frm"]["state"].value;
    var country=document.forms["frm"]["country"].value;
    checkboxes = document.querySelectorAll('input[type="checkbox"]:checked'); 
    var radio=document.forms["frm"]["radio"].value;
    if(fname==""){
        alert("please enter you first name")
        return false;
    }
    else if(fname.length >30 ){
        alert("First Name should Be less Than 30 characters.");
        return false;
    }
   
    else if(!((fname >='A' && fname<='Z') || (fname>='a' && fname<='z'))){
        alert("Enter First Name according to the given parameters.");
        return false;
    }

    else if(lname==""){
        alert("please enter you last name")
        return false;
    }
    else if(lname.length > 30){
        alert("Last Name should Be less Than 30 characters.");
        return false;
    }
    else if(!((lname >='A' && lname<='Z') || (lname>='a' && lname<='z'))){
        alert("Enter Last Name according to the given parameters.");
        return false;
    }
   

    else if(email==""){
        alert("please enter your email")
        return false;
    }
    else if(mobno==""){
        alert("please enter your mobile number")
        return false;
    }
    else if(isNaN(mobno) || (mobno.length<10 || mobno.length>10)){
        alert("Please Enter Valid Mobile Number.");
        return false;
    }
    else if(gender==""){
        alert("please select your gender")
        return false;
    }
    else if(address==""){
        alert("please enter your address")
        return false;
    }
    else if(city==""){
        alert("please enter your city")
        return false;
    }
    else if(!((city >='A' && city<='Z') || (city>='a' && city<='z'))){
        alert("Enter city according to the given parameters.");
        return false;
    }
    else if(pincode==""){
        alert("please enter your pincode")
        return false;
    }
    else if((isNaN(pincode)) || pincode.length > 6 || pincode.length<6){
        alert("Invalid PinCode.");
        return false;
    }
    
    else if(state==""){
        alert("please enter your state")
        return false;
    }

    else if(state.length > 30){
        alert("State Name should Be less Than 30 characters.");
        return false;
    }
    else if(!((state >='A' && state<='Z') || (state>='a' && state<='z'))){
        alert("Enter state Name according to the given parameters.");
        return false;
    }
    else if(country==""){
        alert("please enter your country")
        return false;
    }
   
    else if(checkboxes.length === 0){
        alert("Please Select Hobbies.");
        return false;
        
    }
    else if(radio==""){
        alert("please select courses")
        return false;
    }


    // checking Last Name conditions

    



    // checking mobile number conditions
    
    
    

    // checking pin conditions
    
    
    // checking state conditions
    
   

    
    /*else if(radio==""){
        alert("please enter your course")
        return false;
    }*/
    else{
        alert("Form submitted successfully")
        return true;
    }
}