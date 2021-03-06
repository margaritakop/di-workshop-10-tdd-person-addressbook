const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')

describe('Person', ()=> {
    it ('should initialise properly', () => {
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
        expect(person.firstName).to.equal('Joe')
        expect(person.surname).to.equal('Bloggs')
        expect(person.dob).to.equal('1 Jan 1990')
        expect(person.emails).to.deep.equal([])
    })

    it ('should capitalise the first letter of the first name', () => {
        var person = new Person('amy', 'Bloggs', '1 Jan 1990')
        expect(person.firstName).to.equal('Amy')
    })

    it ('should return full name', () => {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
    expect(person.fullname()).to.equal("Joe Bloggs")
    })

    it ('should accept new emails and add them to the emails array', () => {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
    person.addEmail('joe@example.com')
    person.addEmail('joe.briggs@example.com')

    expect(person.emails).to.deep.equal(['joe@example.com', 'joe.briggs@example.com'])
    })

    it ('should accept new phone number and add them to the phone numbers array', () =>{
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
        person.addPhoneNumber('07802810000')
        person.addPhoneNumber('1234567890')

    expect(person.phones).to.deep.equal(['07802810000', '1234567890'])
    })
    
})