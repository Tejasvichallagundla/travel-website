//https://restcountries.com/v3.1/name/{name}
async function fetchfunction(){
    const name=document.getElementById("input-country").value;
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    data=await response.json();
    console.log(data);
    let i=data.length-1;
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
        <h3>${countryname}<h3>
        <p id="currency"> Capital : ${capital}</p>
        <p id="currency">currency: ${currencyname} : ${currencysymbol}</p>
        <img id="card-img" src='${image}'>
        <div>
        <button>tourist places</button>
        </div>
        </div>
        `
       }
}
