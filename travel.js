//https://restcountries.com/v3.1/name/{name}
//5ae2e3f221c38a28845f05b69616e5ea86f44711ac20667ff0e542cf 
//https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&apikey=${apiKey}`
async function fetchplaces(){
    const Apikey="5ae2e3f221c38a28845f05b69616e5ea86f44711ac20667ff0e542cf";
    const placeresponse= await fetch(`https://api.opentripmap.com/0.1/en/places/radius?&apikey=${Apikey}`); 
    const placedata=await placeresponse.json();
    console.log(placedata);
}
async function fetchstates(countryname){
    const countryName= countryname;
    const response= await fetch('https://countriesnow.space/api/v0.1/countries/states',{
        method: 'POST', // We are sending data
        headers: {
            'Content-Type': 'application/json' // Tells server we're sending JSON
        },
        body: JSON.stringify({ country: countryName }) // Sending the country name
    });
    const data= await response.json();
    console.log(data.data.states);
    const states=data.data.states;

    for(let i=0;i<states.length;i++){
        document.getElementById("states").innerHTML+= 
        `
        <p>${states[i].name}</p>
        `
        console.log(states[i].name);
    }
}
async function fetchfunction(){
    const name=document.getElementById("input-country").value;
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data=await response.json();
    console.log(data);
    let i=data.length-1;
    document.getElementById("card-cont").innerHTML = "";

    while(i>=0){

        const countryname=data[i].name.common; 
        console.log(countryname);
        const image=data[i].flags.png;
        const capital=data[i].capital;
        const currencyname=Object.values(data[i].currencies)[0].name;
        const currencysymbol=Object.values(data[i].currencies)[0].symbol;
        i=i-1;
          
        
        document.getElementById("card-cont").innerHTML+=
        `<div class="card">
        <h3>${countryname}</h3>
        <p class="currency"> Capital : ${capital}</p>
        <p class="currency">currency: ${currencyname} : ${currencysymbol}</p>
        <img class="card-img" src='${image}'>
        <div>
          <button class="state-button" data-country="${countryname}">States</button>
        </div>
        </div>
    
        `
        
    }
    const buttons = document.querySelectorAll(".state-button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const country = button.getAttribute("data-country");
    localStorage.setItem("country", country);
    fetchplaces(); // optional
    window.location.href = 'states.html';
  });
});

}
// Attach event listeners after buttons are rendered


