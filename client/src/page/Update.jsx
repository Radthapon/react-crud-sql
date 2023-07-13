import React, { useEffect, useState } from 'react'
import './add.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const Update = () => {

  // data update
  const [book, setBook] = useState({
    title:"",
    desc:"",
    cover:"",
    price:"",
  })

  // Loop data old
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

  const handleChange = (e) => {
    setBook((perv) => ({...perv, [e.target.name]:e.target.value}))
  }

  const handleCilkUpdate = async e => {
    e.preventDefault()
    try{
      await axios.put("http://localhost:3000/books/"+bookId, book)
    }catch(err){
      console.log(err);
    }
  }

  return (
      <div className="form">
      <h1>Update THE  Book</h1>
      {perBook.map(book => (
        <div className="book" key={book.id}>
          <h1>{book.id}</h1>    
          <input type="text" name="title" placeholder={book.title_book}  onChange={handleChange}/>
          <input type="text" name="desc" placeholder={book.desc}  onChange={handleChange}/>
          <input type="text" name="cover" placeholder={book.imges_book}  onChange={handleChange}/>
          <input type="number" name="price" placeholder={book.price} onChange={handleChange} />
          <button onClick={handleCilkUpdate}>Update</button>
        </div>
      ))}
    </div>
  )
}

export default Update