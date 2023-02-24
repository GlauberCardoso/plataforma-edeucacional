import React from 'react'

import { NavLink } from 'react-router-dom'

import ScrollModule1 from './js/ScrollModule1'
import ScrollModule2 from './js/ScrollModule2'
import ScrollModule3 from './js/ScrollModule3'
import ScrollModule4 from './js/ScrollModule4'
import ScrollModule5 from './js/ScrollModule5'
import ScrollModule6 from './js/ScrollModule6'
import ScrollModule7 from './js/ScrollModule7'
import ScrollModule8 from './js/ScrollModule8'
import ScrollModule9 from './js/ScrollModule9'
import ScrollModule10 from './js/ScrollModule10'
import ScrollModule11 from './js/ScrollModule11'
import ScrollModule12 from './js/ScrollModule12'

export default function Modules() {
  return (
    <div className='container-modules'>
        <div className='items'>
            <div className="item"><NavLink onClick={ScrollModule1} style={{textDecoration: 'none', color: 'currentcolor'}}>1</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule2} style={{textDecoration: 'none', color: 'currentcolor'}}>2</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule3} style={{textDecoration: 'none', color: 'currentcolor'}}>3</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule4} style={{textDecoration: 'none', color: 'currentcolor'}}>4</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule5} style={{textDecoration: 'none', color: 'currentcolor'}}>5</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule6} style={{textDecoration: 'none', color: 'currentcolor'}}>6</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule7} style={{textDecoration: 'none', color: 'currentcolor'}}>7</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule8} style={{textDecoration: 'none', color: 'currentcolor'}}>8</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule9} style={{textDecoration: 'none', color: 'currentcolor'}}>9</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule10} style={{textDecoration: 'none', color: 'currentcolor'}}>10</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule11} style={{textDecoration: 'none', color: 'currentcolor'}}>11</NavLink></div>
            <div className="item"><NavLink onClick={ScrollModule12} style={{textDecoration: 'none', color: 'currentcolor'}}>12</NavLink></div>
        </div>
    </div>
  )
}
