class car {
    //the car class constructor
    constructor(make,year) {
        this.make = make;
        this.year = year;
    }

    //the seting and geting for the car make class
    set make(newmake){
        if (typeof newmake === 'string' && newmake.length > 0 ) {
            newmake = newmake.trim().charAt(0).toUpperCase() + newmake.slice(1).toLowerCase();
            this._newmake = newmake;
        } else {
            console.error(`${newmake} this is not a type of car`);
        }
    }
    get make(){
        return this._newmake;
    }

     //the seting and geting for the car year class
    set year(newyear){
        if (typeof newyear === 'number' && newyear >= 1886 ) {
             newyear = newyear.toFixed();
            this._newyear = newyear;
        } else {
            console.error(`${newyear} this is not a type of car`);
        }
    }
    get year(){
        return this._newyear;
    }

    get allinfor(){
        return `the make is ${this._newmake} & the year ${this._newyear}` 
    }
}

const car1 = new car("bmw",1999);
const car2 = new car("benz",2000);

console.log(car1.allinfor)
console.log(car2.allinfor)
