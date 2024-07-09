document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = document.getElementById('temperature').value;
    const conversionType = document.getElementById('conversionType').value;
    let result;

    if (conversionType === 'CtoF') {
        result = celsiusToFahrenheit(temperature);
    } else if (conversionType === 'FtoC') {
        result = fahrenheitToCelsius(temperature);
    }

    document.getElementById('result').textContent = `Result: ${result}`;
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


