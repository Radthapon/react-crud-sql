import axios from 'axios';
import React, { useState } from 'react'

const Add = () => {
  const [book, setBook] = useState({
    title:"",
    desc:"",
    price:"",
    cover:"",
  })

  const handlerChange = (e) => {
    setBook(prev=>({...prev,[e.target.name]: e.target.value}));
  }

  const handlerSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3000/books", book)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="add">
      <h1>ADD NEW BOOK</h1>
      <input type="text" name="title" placeholder="title book" onChange={handlerChange}/>
      <input type="text" name="desc" placeholder="desc" onChange={handlerChange}/>
      <input type="number" name="price" placeholder="price" onChange={handlerChange}/>
      <input type="text" name="cover" placeholder="cover" onChange={handlerChange}/>
      <button onClick={handlerSubmit}>Submit</button>
    </div>
  )
}

export default Add
