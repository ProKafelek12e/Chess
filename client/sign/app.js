function sign(){
    const password = document.getElementById("password").value
    console.log(password)
    for( var i=0;i<=password.length-1;i++){
        if(password.length<8){
            console.log("password to short")
        }     
    }
}