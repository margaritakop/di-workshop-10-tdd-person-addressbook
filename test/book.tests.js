const chai = require('chai')
const expect = chai.expect

const Person = require('../models/book.js')

describe('Book', ()=> {
    it ('should initialise properly', () => {
        var book = new Book
        expect(book.entries).to.deep.equal([])
    })
})