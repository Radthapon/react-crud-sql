import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './add.css'

const Add = () => {
  const [book, setBook] = useState({
    title:"",
    desc:"",
    cover:"",
    price:"",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value }))
  }

  const handleClik = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:3000/books", book);
      navigate("/")
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input type="text" name="title" placeholder='title' onChange={handleChange} />
      <input type="text" name="desc" placeholder='desc' onChange={handleChange} />
      <input type="text" name="cover" placeholder='cover' onChange={handleChange} />
      <input type="number" name="price" placeholder='price' onChange={handleChange} />
      <button  onClick={handleClik}>ADD +</button>
    </div>
  )
}

export default Add
