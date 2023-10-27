function setusername(){
    document.getElementById("username-p").innerHTML = document.getElementById("username").value + "'s Gallery";
}

function setuserprofile(){
    document.getElementById("pannyImage").style.backgroundImage = "url(" + document.getElementById("user-profile").value + ")";
}