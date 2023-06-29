import React, {useState} from 'react'
import { joke } from '../../data/dummyData'
import './content.css'
const Content = () => {
  const [count, setCount] = useState(1)
  const [jokes, setJokes] = useState(joke[0])
  const setNext = ()=>{
    setJokes(joke[count])
    setCount(prev=>prev+1)
  }
  return (
    <div className='content-container'>
      <div className='content'>
        <div className='content-heading'>
          <h1>A joke a day keeps the doctor away</h1>
          <h5>If you joke wrong way, your teeth have to pay. (Serious)</h5>
        </div>
        <div className='content-joke'>
          {count<=joke.length ? (
            <p>{jokes.joke}</p>
          ):(
            <p style={{textAlign:"center"}}>That's all the jokes for today! Come back another day!</p>
          )}
        </div>
        <div className='content-button'>
          <button className='content-button__funny' onClick={setNext}>This is Funny!</button>
          <button className='content-button__notFunny' onClick={setNext}>This is not Funny!</button>
        </div>
      </div>
    </div>
  )
}

export default Content