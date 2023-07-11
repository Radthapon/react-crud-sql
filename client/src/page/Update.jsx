import React, { useEffect, useState } from 'react'
import './add.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const Update = () => {

  const [perBook,setPerBook] = useState([])
  const location = useLocation()
  const bookId = location.pathname.split("/")[2]

  useEffect(() => {
    const facthPerBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books/"+bookId)
        setPerBook(res.data)
        
      }catch(err){
        console.log(err);
      }
    }
    facthPerBook()
  },[])

  return (
      <div className="form">
      <h1>Update THE  Book</h1>
      {perBook.map(book => (
        <div className="book" key={book.id}>
          <h1>{book.id}</h1>    
          <input type="text" name="title" placeholder={book.title_book}  />
          <input type="text" name="desc" placeholder={book.desc}  />
          <input type="text" name="cover" placeholder={book.imges_book}  />
          <input type="number" name="price" placeholder={book.price}  />
          <button>Update</button>
        </div>
      ))}
    </div>
  )
}

export default Update