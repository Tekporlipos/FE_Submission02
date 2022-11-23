window.onload = (event)=>{
    const token  =   getCookie("token");
    const refreshTokenken  =   getCookie("refresh_token");
    if((token && token.length !== 277 ) || (refreshTokenken && refreshTokenken.length !== 260)){
        window.location.replace("login.html");
    }else if(token.length !== 277 ){
        refreshToken().then(data=>{

            if(data.access_token){
                setCookie("token",data.access_token,15*60*1000);
            }else{
                setCookie("token",null,-15*60*1000);
                setCookie("refresh_token",null,-30*12*60*60*1000);
                window.location.replace("login.html");
            }

        });
    }
  
  }