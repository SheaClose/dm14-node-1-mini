let books = [];
let id = 0;

module.exports = {
  getBooks(req, res) {
    return res.status(200).json(books);
  },
  postBook(req, res) {
    id++;
    req.body.id = id;
    books.push(req.body);
    return res.status(200).json(books);
  },
  updateBook(req, res) {
    // books.forEach(
    //   book => (book.id == req.params.id ? Object.assign(book, req.body) : null)
    // );
    for (let i = 0; i < books.length; i++) {
      if (books[i].id == req.params.id) {
        for (let key in req.body) {
          books[i][key] = req.body[key];
        }
      }
    }
    return res.status(200).json(books);
  },
  deleteBook(req, res) {
    let ind = books.findIndex(book => book.id == req.params.id);
    books.splice(ind, 1);
    return res.status(200).json(books);
  }
};

// Object.assign({
//   title: 'lalala',
//   author: "Shea"
// },
// {
//   title: 'Little Women'
// }
// )
