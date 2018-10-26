const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')

describe('Person', ()=> {
    it ('should initialise properly', () => {
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
        expect(person.firstName).to.equal('Joe')
        expect(person.surname).to.equal('Bloggs')
        expect(person.dob).to.equal('1 Jan 1990')
    })
})