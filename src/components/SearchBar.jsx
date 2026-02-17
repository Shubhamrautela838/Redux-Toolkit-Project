import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {

const [text, setText] = useState('')

const dispatch= useDispatch()



const submitHandler = (e)=>{
    e.preventDefault();
     dispatch(setQuery(text))

}

     
  return (
    <div>
        <form 
         onSubmit={(e)=>{
            submitHandler(e);
         }}
        className='flex  bg-(--c1) gap-5 p-10'>
            <input required 
            value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            className='border-2 w-full px-4 py-2 text-xl rounded outline-none' type="text" placeholder='Search anything...' />
            <button  className='border-2 active:scale-95 cursor-pointer px-4 py-2 text-xl rounded outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar