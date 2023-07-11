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
      <input type="text" name="title" placeholder='title'  />
      <input type="text" name="desc" placeholder='desc'  />
      <input type="text" name="cover" placeholder='cover'  />
      <input type="number" name="price" placeholder='price'  />
      <button >Update</button>
    </div>
  )
}

export default Update