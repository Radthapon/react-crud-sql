const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
const port = 3000

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"RadthaponDev",
    database:"new_books"
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/books', (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get('/books/:id', (req, res) => {
  const bookId = req.params.id
  const q = "SELECT * FROM books WHERE id = ?"
  db.query(q,bookId, (err, data) => {
      if (err) return res.json(err)
      return res.json(data)
  })
})

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title_book`,`desc`,`imges_book`,`price`) VALUES (?)"

  // const values = ["title from backend","desc from backend","cover from backend"]
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("Book has been created successfuly.")
  })
})


app.delete("/delete/:id", (req, res) => {
  const bookId = req.params.id
  const q = "DELETE FROM books WHERE id = ?"

  db.query(q,[bookId], (err,data) => {
    if (err) return res.json(err)
      return res.json("Book has delete successfuly")
  })
})

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id
  const q = "UPDATE books SET `title_book` = ?, `desc` = ?, `imges_book` = ?, `price` = ? WHERE id = ?"

  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ]

  db.query(q,[...values,bookId], (err,data) => {
    if (err) return res.json(err)
      return res.json("Book has update successfuly")
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})