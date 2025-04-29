//https://restcountries.com/v3.1/name/{name}
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
    for(i=0;i<states.length;i++){
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
        <button onclick="
        fetchstates('${countryname}');
        ">tourist places</button>
        </div>
        </div>
        `
       
    }
}
