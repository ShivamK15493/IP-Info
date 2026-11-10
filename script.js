
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

   let DOMAIN = data.as_domain;  // Assign domain
   let ISP = data.as_name;    // Assign Isp
   let ASN = data.asn;  // Assign ASN
   let COUNTRY = data.country;  // Assign Country
   let CountryCode = data.country_code; // Assign Country Code
   let CONTINENT = data.continent;  // Assign Continent 
   let ContinentCode = data.continent_code;  // Assign Continent Code
   let IP = data.ip;  // Assign IP

   
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
       <b>My IP:</b> ${IP} <br>     
       <b>Domain:</b> ${DOMAIN} <br>  
       <b>Domain Name:</b> ${ISP} <br> 
       <b>ASN:</b>  ${ASN}  <br>    
       <b>Country:</b> ${COUNTRY} <br>     
       <b>Country Code:</b> ${CountryCode} <br>  
       <b>Continent:</b>  ${CONTINENT} <br>  
        
    </div>
   `;
})

})
