import React from 'react'
import { useLocation } from 'react-router-dom'
import { ContextApi } from '../Context'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const { chooseTopic, topics, Topic, ModeChange, Mode } = ContextApi()
  const { pathname } = useLocation();
  return (
    <>
      <header className="d-flex justify-content-center py-3 sticky-top" style={{ backgroundColor: '#6610f2' }}>
        <ul className="nav nav-pills d-flex justify-content-center align-items-center">
          {topics.map(topic => (
            <li className="nav-item" key={topic.name}>
              {topic.name === "Home" ?
                <Link to="/" onClick={(e) => chooseTopic(e.target.dataset.topic)} data-topic={topic.topic} className={`nav-link text-light ${pathname === "/" ? 'active' : ''}`} aria-current="page">Home </Link>
                :
                <Link to='/category' onClick={(e) => chooseTopic(e.target.dataset.topic)} data-topic={topic.topic} className={`nav-link text-light ${Topic === topic.topic && pathname === "/category" ? 'active' : ''}`}>{topic.name}</Link>
              }
            </li>
          ))}
          <div className="form-check form-switch text-light" style={{ width: "8rem" }}>
            <input className="form-check-input" type="checkbox" onClick={() => ModeChange()} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" forhtml="flexSwitchCheckDefault">{Mode === "light" ? "Dark" : "Light"} Mode</label>
          </div>
        </ul>
      </header>
    </>
  )
}
