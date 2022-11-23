// middleware

window.onload = (event)=>{
  const token  =   getCookie("token");
  if(token && token.length === 277){
    window.location.replace("index.html");
  }

}



// handling submite
document.querySelector("form")
.addEventListener("submit", function(event) {
    event.preventDefault()


    const userName = event.target[0].value;
    const password = event.target[1].value;

    const error  = document.querySelector(".error");
    error.style.display="none";
    const loader  = document.querySelector(".loader");
    loader.style.display="block";
    

    if(userName && userName.length >= 3 && password && password.length>=8){


        loginAuth({
            "username": userName, 
            "password": password 
            }).then(data=>{
                if(data.msg){
                    error.innerText = data.msg;
                    error.style.display="block";
                    loader.style.display="none";
                }else if(data.access_token && data.refresh_token){
                    setCookie("token",data.access_token,15*60*1000);
                    setCookie("refresh_token",data.refresh_token,30*12*60*60*1000);
                    window.location.replace("index.html");
                }else{
                    error.style.display="block";
                    loader.style.display="none";
                }

            }).catch(value=>{
                error.innerText = value;
                error.style.display="block";
            })


    }else{
        error.style.display="block";
    }
    
  });