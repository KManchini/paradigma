'use client'

import './aligator.scss'
import { useState } from 'react'


export default function Aligator (menuList) {
const [toggled, setToggled] = useState(false)
console.log(menuList);

return (
    <div className='mobMenuCont'>
        <div className='hamburgerCont'>
            <div 
                className={toggled ? 'hamburger close' : 'hamburger'}
                onClick={() => setToggled(!toggled)}
            >
                <span className="meat"></span>
                <span className="meat"></span>
                <span className="meat"></span>
                <span className="meat"></span>
            </div>
        </div>
        <ul
            className={[
                'menu',
                toggled && 'active'
            ].filter(Boolean).join(' ')}
        >

                                {menuList.children}

        </ul>
    
    </div>
)
}
