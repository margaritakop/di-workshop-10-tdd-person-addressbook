const chai = require('chai')
const expect = chai.expect

const Book = require('../models/book.js')
const Person = require('../models/person.js')

describe('Book', ()=> {
    it ('should initialise properly', () => {
        var book = new Book
        expect(book.entries).to.deep.equal([])
    })

    it('should add person to the array of entries', () =>{
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
        var book = new Book
        book.add(person)
        expect(book.entries).to.deep.equal([person])
    }
    )
})