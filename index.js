
function convertTemperature() {
    const input = document.getElementById('tempInput').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultOutput = document.getElementById('resultOutput');

    const temperature = parseFloat(input);

    if (isNaN(temperature) || input === '') {
        resultOutput.textContent = 'Please enter a valid number.';
        resultOutput.style.color = 'red';
        return;
    }
    
    resultOutput.style.color = '#28a745'; 

    let convertedTemp;
    let unitSymbol;
    let tempInCelsius;

    if (fromUnit === 'celsius') {
        tempInCelsius = temperature;
    } else if (fromUnit === 'fahrenheit') {
        // F -> C: (F - 32) * 5/9
        tempInCelsius = (temperature - 32) * 5 / 9;
    } else if (fromUnit === 'kelvin') {
        // K -> C: K - 273.15
        tempInCelsius = temperature - 273.15;
    }

    if (toUnit === 'celsius') {
        convertedTemp = tempInCelsius;
        unitSymbol = '°C';
    } else if (toUnit === 'fahrenheit') {
        // C -> F: (C * 9/5) + 32
        convertedTemp = (tempInCelsius * 9 / 5) + 32;
        unitSymbol = '°F';
    } else if (toUnit === 'kelvin') {
        // C -> K: C + 273.15
        convertedTemp = tempInCelsius + 273.15;
        unitSymbol = 'K';
    }

    const formattedResult = convertedTemp.toFixed(2);
    resultOutput.textContent = `${formattedResult} ${unitSymbol}`;
}