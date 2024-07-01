// Function to convert temperature
function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = celsiusToFahrenheit(temperature);
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = celsiusToKelvin(temperature);
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = fahrenheitToCelsius(temperature);
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = fahrenheitToKelvin(temperature);
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = kelvinToCelsius(temperature);
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = kelvinToFahrenheit(temperature);
    }

    document.getElementById("result").value = result.toFixed(2);
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return kelvin * 9/5 - 459.67;
}
