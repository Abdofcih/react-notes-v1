import React from 'react'
import { ReactComponent as MoonIcon } from '../asstes/moon.svg'
import { ReactComponent as SunIcon } from '../asstes/sun.svg'

const Header = ({theme, onChangeTheme=f=>f}) => {
    return (
        <div className="app-header">
          <h1 >Notes</h1> 
         
         <div className="themeIcon" onClick={onChangeTheme}>  {
            (theme === "dark") ? <SunIcon /> :<MoonIcon />
           }</div>
        </div>
    )
}

export default Header
