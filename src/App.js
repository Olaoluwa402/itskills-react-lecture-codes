import React, { Component } from 'react'
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'

const Home = () => (<h2>Home</h2>)
const About = () => (<h2>About</h2>)
const Contact= () => (<h2>Contact</h2>)
const Challenges = () => (<h2>Challenges</h2>)
const NotFound = () => (<h2>NotFound </h2>)
class App extends Component {
     render() {
    return (
        <div className='App'>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/challenges'>Challenges</NavLink></li>

          </ul>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/challenges' element={<Challenges />}/>
              <Route path='/not-found' element={<NotFound />}/>

              <Route path='*' element={<Navigate to='/not-found'/>}/>
          </Routes>
           
        </div>
    )
  }
}

export default App