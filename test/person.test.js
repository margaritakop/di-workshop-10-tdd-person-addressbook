const chai = require('chai')
const expect = chai.expect

describe("Person", ()=> {
    it ('should initialise properly', () => {
        var person = new person('Joe', 'Bloggs', '1 Jan 1990')
        experct(person.firstname).to.equal('Joe')
        experct(person.surname).to.equal('Bloggs')
        experct(person.dob).to.equal('1 Jan 1990')
    })
})