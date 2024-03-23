import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import React from 'react'
import Logo from './Logo'
import ThemeToogle from './ThemeToggle'

const Header = () => {
  return (
    <header>
    <Navbar>
        <NavbarBrand>
            <Logo />            
        </NavbarBrand>
        <NavbarContent
        justify='end'
        >
            <ThemeToogle />
        </NavbarContent>
    </Navbar>
    </header>
  )
}

export default Header