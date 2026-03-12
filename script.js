// Development in progress

fetch("https://v4.api.ipinfo.io/lite/me?token=91fc25b8c7a097")
.then((res) =>{

    return res.json();
    
})
.then((data) =>{

    console.log(data);
})