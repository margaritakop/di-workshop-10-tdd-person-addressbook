const chai = require('chai')
const expect = chai.expect

const Book = require('../models/book.js')

describe('Book', ()=> {
    it ('should initialise properly', () => {
        var book = new Book
        expect(book.entries).to.deep.equal([])
    })
})