import React from 'react'
import Home from './components/Home'
import DYI from './components/DYI'
import Locked from './components/Locked'

function App() {
  const [state, setState] = React.useState(false)
  const [menuState, setMenuState] = React.useState(false)
  const [menuChange, setMenuChange] = React.useState(true)
  const [checkState, setCheckState] = React.useState(false)
  
  const handleClick = () =>{
        setMenuChange(!menuChange)
        setMenuState(!menuState)
  }

  const handleChange = () =>{
    setState(!state)
    setMenuState(!menuState)
  }

  const check = (isCheck)=>{
    setCheckState(!checkState)
    setMenuState(!menuState)
  
  }

  return (
    <div>
        <div className="nav">
            <div className='title'>
                <h1>MR</h1>
                <h3>DREAMS.in</h3>
            </div>
            <ul className={menuState ? "menu-items-after" : "menu-items-before"}>
                <li><a id='main-home' href='#'>Home</a></li>
                <hr></hr>
                <li><a onClick={handleChange} href='#'>Drop Your Ideas</a></li>
                <hr></hr>
                <li><a onClick={check} href='#'>Join Us</a></li>
                <hr></hr>
                <li><a onClick={check} href='#'>Register for Counseling</a></li>
                <hr></hr>
                <li><a onClick={check} href='#'>Contact Us</a></li>
                <hr></hr>
            </ul>
            <button className='menu-btn' onClick={handleClick}><i class="fa fa-bars" aria-hidden="true"></i></button>
            </div>
      
                  {state ? <DYI /> : <Home isCheck ={checkState}/>}
            </div>
  )
}

export default App