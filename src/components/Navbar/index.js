import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.png';
import logo1 from '../../images/vanguard.png';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';

import {
  Nav,
  NavMenu,
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  function disabeled() {
    console.log(Boolean(window.localStorage.getItem('product')));
    return window.localStorage.getItem('product');
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav scrollNav={scrollNav}>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} alt="logo" width="80%" />
          </NavLogo>

          {/* <Bars onClick={toggle}/> */}
          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                <a to="/">HOME</a>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/About" onClick={toggleHome}>
                <a to="/About">ABOUT</a>
              </NavLinks>
            </NavItem>

            <NavItem>
              {disabeled() === 'true' ? (
                <NavLinks>
                  <Link
                    to="Products"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    PRODUCTS
                  </Link>
                </NavLinks>
              ) : (
                <NavLinks to="/products" onClick={toggleHome}> 
                  <a to="/products">PRODUCTS</a>
                </NavLinks>
              )}
            </NavItem>

            <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                <a to="/Contact">CONTACT</a> 
              </NavLinks>
            </NavItem>
            {/* <NavItem>
            
          <NavLinks >
          <Link to='ContactUs' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}

            <MobileIcon onClick={toggle}>
              <FaBars color="#111" />
            </MobileIcon>

            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <img src={logo1} alt="logo" height="72px" />
            <h3 className="text-left text-black font-bold text-1xl">
              Authorized Dealer
            </h3>
          </NavBtn>
          {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
