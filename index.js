
//ARRAY
let Professions = ['Doctor', 'Artist', 'Astronaut', 'Chef', 'Construction Worker', 'Firefighter', 'Police', 'Teacher', 'Veterinarian', 'Actress/Actor', 'Architect', 'Singer', 'Dentist', 'Detective', 'Writer', 'Farmer', 'Nurse', 'Pilot', 'Engineer', 'Accountant', 'Butcher', 'Cashier', 'Barber', 'Carpenter', 'Baker', 'Electritian', 'Flight Attendant', 'Plumber', 'Photographer', 'Receptionist', 'Scientist', 'Lawyer', 'Bus Driver', 'Designer', 'Journalist', 'Lifeguard', 'Musician', 'Painter', 'Florist', 'Sales Assistant', 'Mechanic', 'Model', 'Shop Assistant', 'Politician', 'Translator', 'Hairdresser', 'Taxi Driver', 'Pharmacist', 'Travel Agent', 'Cleaner', 'Biologist', 'Dancer', 'Gardener', 'Meteorologist', 'Postman', 'Programmer', 'Nanny', 'Travel Guide', 'Salesman', 'Researcher'];


//OBJECT
let dracula = {

    name: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    language: 'English',
    country: 'United Kingdom',
    yearsUntilNow: function() {
        return 2020 - this.year;
    },

    fullName: function() {
        return `${this.name} is a book written by ${this.author} in ${this.year}.`;
    }
}

function Libros(name, author, year, language, country) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.language = language;
    this.country = country;
}

iliada = new Libros('Ilíada', 'Homero', 'Unknown', 'Greek', 'Greece');

console.log(iliada.name);