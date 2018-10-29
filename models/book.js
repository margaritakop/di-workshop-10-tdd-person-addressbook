class Book {
    constructor(){
        this.entries= []
    }
    add(person){
        this.entries.push(person)
    }

    findByFirstName(firstNameSearched){
        for (var i in (this.entries)){
            if (this.entries[i].firstName == firstNameSearched ){  //there should be a nicer way to iterate
                return this.entries[i]
            }
        }
        }
}

module.exports = Book