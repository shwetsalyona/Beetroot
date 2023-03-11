//Мінімум
const car = {
    maker: "Mercedes",
    model: "Benz",
    year: 2022,
    medianSpeed: 150,
    gasTank: 300,
    gasUsage: 10,
    drivers: ["Ben", "Bob"],
    carInfo: function () {
        console.log(this);
        console.log(`Year made: ${this.year}\nMade by: ${this.maker}\n
        Make of car: ${this.model}\nMedian speed: ${this.medianSpeed}\n
        Gas tank capacity: ${this.gasTank}\nGas usage per 100 km: ${this.gasUsage}\nDrivers: ${this.drivers}`);
    },
    addDriver: function (driver) {
        this.drivers.push(driver);
    },
    hasDriver: function (driver) {
        return this.drivers.includes(driver);
    },
    getTripTime: function (distance) {
        const timeInRoad = distance / this.medianSpeed;

        return timeInRoad + Math.floor(timeInRoad / 4);
    },

}
car.carInfo();
car.addDriver("Bill");
console.log(car.hasDriver("Bill"));
console.log(car.hasDriver("Bill 1"));
console.log('Time for travel ' + car.getTripTime(1500) + ' hours');


console.log(car);


