// initializing root and select tags
const root = document.getElementById("root");
const container = document.getElementById("container");
const convertFrom = document.getElementById("convertFrom");
const convertTo = document.getElementById("convertTo");

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
            let option2 = document.createElement('option');
            option2.innerText = currency;
            if (currency === "USD") {
                option1.setAttribute("selected", "true");
                option2.setAttribute("selected", "true");
            }
            convertFrom.appendChild(option1);
            convertTo.appendChild(option2);
        }
    })

button.addEventListener('click', () => {
    let selectionFrom = convertFrom[convertFrom.selectedIndex].innerText
    let selectionTo = convertTo[convertTo.selectedIndex].innerText
    rateTo = rates[selectionTo];
    rateFrom = rates[selectionFrom];
    let equality = document.createElement('p');
    equality.id = "equality"
    let rate = rateTo/rateFrom;

    equality.innerText = `1 ${selectionFrom} = ${rate} ${selectionTo}`;
    container.appendChild(equality);
})


// last line should have input box USD = ___ USD
// let equation = document.createElement("p");
// equation.innerHTML = `<input> ${selectionFrom} = ___ ${selectionTo}`




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


// button.addEventListener('click', () => {
//     fetch('https://openexchangerates.org/api/latest.json?app_id=40cd1c027de1479c9ff379d356eab30a&base=USD')
//     .then(response => response.json())
//     .then(data => {
//         selection = dropDown[dropDown.selectedIndex].innerText
//         let selectedRate = document.createElement('p')
//         selectedRate.innerText = data.rates[selection]
//         container.appendChild(selectedRate)
//     })
// })


// fetch('https://openexchangerates.org/api/latest.json?app_id=40cd1c027de1479c9ff379d356eab30a&base=USD')

// .then(response => response.json())
// .then(data => {
//     let currencies = Object.keys(data.rates)

//     for (let currency of currencies) {
//         let option1 = document.createElement('option')
//         option1.innerText = currency
//         let option2 = document.createElement('option');
//         option2.innerText = currency;
//         if (currency === "USD") {
//             option1.setAttribute("selected", "true");
//             option2.setAttribute("selected", "true");
//         }
//         convertFrom.appendChild(option1);
//         convertTo.appendChild(option2);
//     }
// })

// button.addEventListener('click', () => {
//     let 
// })


    // .then( () => {
    //     let selectionFrom = convertFrom[convertFrom.selectedIndex].innerText
    //     let selectionTo = convertTo[convertTo.selectedIndex].innerText

    //     let rateTo = currencies.selectionTo
    //     console.log(rateTo)
    //     let rateFrom = currencies.`${selectionFrom}`

    //     let equation = document.createElement("p");
    //     equation.innerHTML = `${rateFrom} ${selectionFrom} = ${rateTo} ${selectionTo}`
    //     root.appendChild(equation);

    //     button.addEventListener('click', () => {
    //         let selectionFrom = convertFrom[convertFrom.selectedIndex].innerText
    //         let selectionTo = convertTo[convertTo.selectedIndex].innerText
            
    //     })
    // })
