- [Async Await](#async-await)
  - [Callback and promises](#callback-and-promises)
  - [Async functions -](#async-functions)
- [Real world example - Currency convertor](#real-world-example---currency-convertor)

# Async Await

## Callback and promises

Old way to do asynchronous code using **Callbacks** and **Promises** -

```javascript
const promiseFunction = new Promise((resolve, reject) => {
  const add = (a, b) => a + b;
  resolve(add(2, 2));
});
promiseFunction.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
```

## Async functions - 
Async function provide us with a clean and concise syntax that enables us to write less code to accomplish the same outcome we would get with promises. Async is nothing more than syntactic sugar for promises.

Async functions are created by prepending the word async before the function declaration like this:

```javascript
// Async/Await
const asyncGreeting = async () => 'Greetings';
// Promises
const promiseGreeting = () => new Promise(((resolve) => {
  resolve('Greetings');
}));
asyncGreeting().then(result => console.log(result));
promiseGreeting().then(result => console.log(result));
```
# Real world example - Currency convertor

Take in currency code we want to convert from and currency code we want to convert to, as well as the amount of money. Output the correct exchange rate based on the data from the APIs.

```javascript
/** Get exhange rate from one currency to another **/
const getExchangeRate = async (fromCurrency, toCurrency) => {
    //await keyword pause async function
    const response = await axios.get('http://data.fixer.io/api/latest?    access_key=[yourAccessKey]&format=1');
    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    return exchangeRate;
}

/** Recieve list of countries where this currency can be used **/
const getCountries = async (currencyCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map(country => country.name);
}


const convert = async (fromCurrency, toCurrency, amount) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const countries = await getCountries(toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
}
```

Now when type 
```javascript
convertCurrency('USD', 'HRK', 20)
  .then((message) => {
    console.log(message);
  }).catch((error) => {
    console.log(error.message);
  });

  //OUTPUT
  20 USD is worth 129.90 HRK. You can spend these in the following countries: Croatia
```