
// Development in Progress

let result = document.getElementById("get");
let answer = document.getElementById("main");

answer.hidden=true; // Switch to hide the answer


result.addEventListener("click", () =>{

fetch("https://v4.api.ipinfo.io/lite/me?token=91fc25b8c7a097")
.then((res) =>{

     return res.json();

})
.then((data) =>{
  
    console.log(data);

    answer.hidden=false; // Switch to show the answer

   let DOMAIN = data.as_domain;
   let ISP = data.as_name;
   let ASN = data.asn;
   let COUNTRY = data.country;
   let CountryCode = data.country_code;
   let CONTINENT = data.continent;
   let ContinentCode = data.continent_code;
   let IP = data.ip;

   
//    console.log(IP);
//    console.log(DOMAIN);
//    console.log(ISP);
//    console.log(ASN);
//    console.log(COUNTRY);
//    console.log(CountryCode);
//    console.log(CONTINENT);
//    console.log(ContinentCode);

   answer.innerHTML=`
    <div id="ans">
       <b>My IP:</b> ${IP} <br>     // Displays Ip
       <b>Domain:</b> ${DOMAIN} <br>  // Displays Domain
       <b>Domain Name:</b> ${ISP} <br> // Displays Domain name
       <b>ASN:</b>  ${ASN}  <br>   // Displays Autonomous System Number 
       <b>Country:</b> ${COUNTRY} <br>     //Displays Country
       <b>Country Code:</b> ${CountryCode} <br>  //Displays Country Code
       <b>Continent:</b>  ${CONTINENT} <br>  //Displays Countinent
        
    </div>
   `;
})

})
