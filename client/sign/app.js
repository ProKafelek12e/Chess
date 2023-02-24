function sign(){
    const password = document.getElementById("password").value
    console.log(password)
    var big = 0
    var small = 0
    var number = 0
    var special = 0
    var un = 0
    var len = 0
    for( var i=0;i<=password.length-1;i++){
           
        if(password[i].charCodeAt(0)>=65 && password[i].charCodeAt(0)<=90){
            console.log("big letter")
            big=1
        }
        else if(password[i].charCodeAt(0)>=97 && password[i].charCodeAt(0)<=122){
            console.log("small letter")
            small=1
        }
        else if(password[i].charCodeAt(0)>=48 && password[i].charCodeAt(0)<=57){
            console.log("number")
            number=1
        }
        else if(password[i].charCodeAt(0)>=33 && password[i].charCodeAt(0)<=47){
            console.log("special character")
            special=1
        }
        else{
            console.log("unab")
            un=1
        }
    }
    if(un==0 && big==1 && small==1 && special==1 && number ==1 && password.length>=8){
        console.log("good passwordc")
    }
}
function rep(){
    if(document.getElementById("password").value == document.getElementById("password2").value){
        console.log("same passwords")
    }
    else{
        console.log("diffrent passwords")
    }
}