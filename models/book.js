class Book {
    constructor(){
        this.entries= []
    }
    add(person){
        this.entries.push(person)
    }
}

module.exports = Book