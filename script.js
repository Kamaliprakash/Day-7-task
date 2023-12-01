
// a. Get all the countries from Asia continent /region using Filter function


fetch('https://restcountries.com/v3.1/all')
.then(response=> response.json())
.then(data => {
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia',asiaCountries);
})

// B. Get all the countries with a population of less than 2 lakhs using Filter function


fetch('https://restcountries.com/v3.1/all')
.then(response=> response.json())
.then(data => {
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log('countries with population less than 2 lakhs:',countriesWithLowPopulation);
})


// C. Print the following details name, capital,flag, using forEach function


fetch('https://restcountries.com/v3.1/all')
.then(response=> response.json())
.then(data => {
    data.forEach(country =>{
        console.log('Name:',country.name.common);
        console.log('Capital:',country.capital);
        console.log('Flag:',country.flags.svg);
        console.log('Name','Capital','Flag');
    })
})

// D. Print the total population of countries using reduce function


fetch('https://restcountries.com/v3.1/all')
.then(response=> response.json())
.then(data =>{
    const totalPopulation = data.reduce((acc,country)=> acc+ country.population,0);
    console.log('Total population of countries:', totalPopulation);

})

// E.  Print the country that uses US dollars as currency.

fetch('https://restcountries.com/v3.1/all')
.then(response=> response.json())
.then(data =>{
const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
console.log('Countries using US dollars:',usDollarCountries);
})
.catch(error => console.error('Error Fetching data:',error));