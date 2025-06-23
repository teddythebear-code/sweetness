// DOM Element id

const makeinfor = document.getElementById("makeinfor");
const yearinfor = document.getElementById("yearinfor");
const reset = document.getElementById("reset");
const submit = document.getElementById("submit");
const input = document.getElementById("input");

// the calss
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

     //the setter and getter for the car year class
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

    // get allinfor(){
    //     return `the make is ${this._newmake} & the year ${this._newyear}` 
    // }
}

// the submit funtion
submit.onclick = () =>{
}

// the submit funtion
reset.onclick = () =>{
}
