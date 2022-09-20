const personObject = {
    fullName: function () {
        return this.firstName + '' + this.lastName;
    }
}

//Cách 1

personObject.__proto__.sayBye = function () {
    console.log('goodbye');
}

//Cách 2

const say = {
    sayBye: function () {
        console.log('goodbye');
    }
}

personObject.__proto__ = Object.create(say);

///
const quang = Object.create(personObject);
quang.sayBye();


