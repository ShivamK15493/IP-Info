
// Development in Progress

let result = document.getElementById("get");
let answer = document.getElementById("main");

answer.hidden=true;


result.addEventListener("click", () =>{

fetch("https://v4.api.ipinfo.io/lite/me?token=91fc25b8c7a097")
.then((res) =>{

     return res.json();

})
.then((data) =>{
  
    console.log(data);

    answer.hidden=false;

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
