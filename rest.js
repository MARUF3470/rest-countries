const LoadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    //console.log(countries)
    const allCountryHtml = countries.map(country => getCountryHtml(country))
    // console.log(allCountryHtml)
    const container = document.getElementById('countries')
    container.innerHTML = allCountryHtml.join(' ')
}
const getCountryHtml = country => {
    //console.log(country.name.common)
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src = '${country.flags.png}'>
    </div>
    `
}

LoadCountries()