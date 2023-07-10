import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./books.css"
import { Link } from 'react-router-dom'
const Books = () => {

  const [books,setBooks] = useState([])

  useEffect(() => {
    const facthAllBooks = async () => {
      try{
        const res = await axios.get("http://localhost:3000/books")
        // console.log(res);
        setBooks(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    facthAllBooks()
  },[])
  return (
    <div>
      <h1>Lama Book Shop</h1>
      <div className="books">
        {books.map(book => (
          <div className="book" key={book.id}>
            {book.imges_book && <img src={book.imges_book} alt="" />}
            <h2>{book.title_book}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <div className="buttbook">
              <button className='del'><Link to="">Delete</Link></button>
              <button className='upd'><Link to="">Update</Link></button>
            </div>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  )
}

export default Books