//Kelvin = Celsius + 273.15
//Fahrenheit = Celsius * 1.80 + 32.00
var convertTemperature = function (celsius) {
    return [celsius + 273.15, celsius * 1.80 + 32.00]
};

console.log(convertTemperature(36.50)) //[309.65000,97.70000]
console.log(convertTemperature(122.11)) //[395.26000,251.79800]