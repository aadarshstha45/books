const Books = require('./model');

exports.createBooks = (req,res) => {
    try{
        const name = req.body.name;
        console.log(name);

        Books.create({
            name:name
        });

        res.status(201).send("Books added successfully");
    }catch(e){
        console.log(e);
    }
}

exports.getBooks = async(req, res) => {
    try{
        const books = await Books.findAll();
        res.status(201).json(books);
    }catch(e){
        console.log(e);
    }
}

exports.getIndBooks = async(req, res) => {
    try{
        const id = req.params.id;
        const book = await Books.findByPk(id);
        res.status(201).json(book);
    }catch(e){
    console.log(e);
}
}

exports.updateBooks = async(req, res) => {
    try{
        const id = req.params.id;
        const book = await Books.findByPk(id);
        const updatedName = req.body.name;
        console.log(updatedName);
        if(!book){
            res.status(404).send('Book not found');
        }
        book.name = updatedName;
        book.save();
        res.status(201).json(book);
    }catch(e){
        console.log(e);
    }
}

exports.deleteBooks = async(req,res) => {
    try{
        const id = req.params.id;
        const book = await Books.findByPk(id);
        book.destroy();
        res.status(201).send('Book deleted successfully');
    }catch(e){
        console.log(e);
    }
}