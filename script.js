// initializing root and filling it with a container div, and that with a select tag
const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
const convertFrom = document.createElement('select');
// container.appendChild(convertFrom);
const convertTo = document.createElement('select');
// container.appendChild(convertTo)
container.innerHTML = "<p>Convert from convertFrom to convertTo</p>"

// create a Convert button and place it in container
let button = document.createElement("button");
button.innerText = "Convert";
container.appendChild(button);

// Method 1
// initialize empty object called rates
let rates = {}
let currencies = []

// use fetch to fill above rates object with keys and values of rates object within requested JSON
// create an array of keys within rates and loop over it to fill select element with an option for each key
fetch('https://openexchangerates.org/api/latest.json?app_id=40cd1c027de1479c9ff379d356eab30a&base=USD')
    .then(response => response.json())
    .then(data => {
        rates = data.rates;
        currencies = Object.keys(rates)
        for (currency of currencies) {
            let option1 = document.createElement('option');
            option1.innerText = currency;
            convertFrom.appendChild(option1);
            let option2 = document.createElement('option');
            option2.innerText = currency;
            convertTo.appendChild(option2);
        }
    })

button.addEventListener('click', () => {
    let selection = convertFrom[convertFrom.selectedIndex].innerText
    console.log(rates[selection])
})








// const currencies = [
//     'EUR',
//     'CAD',
//     'HKD',
//     'ISK',
//     'PHP',
//     'DKK',
//     'HUF',
//     'CZK',
//     'AUD',
//     'RON',
//     'SEK',
//     'IDR',
//     'INR',
//     'BRL',
//     'RUB',
//     'HRK',
//     'JPY',
//     'THB',
//     'CHF',
//     'SGD',
//     'PLN',
//     'BGN',
//     'TRY',
//     'CNY',
//     'NOK',
//     'NZD',
//     'ZAR',
//     'USD',
//     'MXN',
//     'ILS',
//     'GBP',
//     'KRW',
//     'MYR'
// ]


// for (let currency of currencies) {
//     let option = document.createElement("option")
//     option.innerText = currency;
//     dropDown.appendChild(option);
// }


button.addEventListener('click', () => {
    // fetch('https://openexchangerates.org/api/latest.json?app_id=40cd1c027de1479c9ff379d356eab30a&base=USD')
    // .then(response => response.json())
    // .then(data => {
    //     selection = dropDown[dropDown.selectedIndex].innerText
    //     let selectedRate = document.createElement('p')
    //     selectedRate.innerText = data.rates[selection]
    //     container.appendChild(selectedRate)
    // })
})