import { Box, Container, Grid, Button, IconButton } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import blueLogo from '../../../../public/logo/blue-logo.svg'
import greyLogo from '../../../../public/logo/grey-logo.svg'
import { Box, Container, Grid, Button, IconButton } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import blueLogo from '../../../../public/logo/blue-logo.svg'
import greyLogo from '../../../../public/logo/grey-logo.svg'
import { Menu, Close, ArrowDropDown } from '@mui/icons-material'
import GreyFilledBtn from '../../../buttons/GreyFilledBtn'
import { Dropdowns } from './components'
import Image from 'next/legacy/image'

const Navbar = () => {
  const [width, setWidth] = useState(601);
  const [clicked, setClicked] = useState(false);
  const [servicesDropdown, setServiceDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [brandDropdown, setBrandDropdown] = useState(false);

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    },[width]);
  
  const closeMobileMenu = () => {
    setClicked(false)
    setServiceDropdown(false)
    setAreasDropdown(false)
    setAboutDropdown(false)
    setBrandDropdown(false)
  }


  return (
    <>
      {width > 600 ?
        <nav className='navbar navbar-expand-md m-0 p-0'>
          <Container maxWidth="xxl" id="navbar">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box className='d-md-flex justify-content-between d-block'>
                  <Link legacyBehavior={true} href="/">
                    <a className='navbar-brand'><Image title='Teressenheating Logo' layout='responsive' src={blueLogo} alt="Teressenheating Logo" /></a>
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <Box className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav'>
                      <li className='nav-item'>
                        <Link legacyBehavior={true} href="/">
                          <a className='nav-link'>Home</a>
                        </Link>
                      </li>
                      <li className='nav-item dropdown dropdown1'>
                        <Link className='nav-link' legacyBehavior={true} href="/services/">
                          <a className="nav-link dropdown-toggle" id="navbardropdown1" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">Services</a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-1 p-2 border-0" aria-labelledby="navbarDropdown">
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/heating-services/">
                              <a className="nav-link dropdown-item">Heating</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/air-conditioning-service/">
                              <a className="nav-link dropdown-item">Cooling</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/commercial-hvac/">
                              <a className="nav-link dropdown-item">Commercial hvac</a>
                            </Link>
                          </li>
                          <li className="nav-item dropdown dropdown2">
                            <Link className='nav-link' legacyBehavior={true} href="/boilers/">
                              <a className="nav-link dropdown-toggle text-dark" id="navbardropdown2" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true" style={{ color: "#000 !important" }}>Boiler</a>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-2 p-2 border-0" aria-labelledby="navbarDropdown">
                              <li className="nav-item">
                                <Link className='nav-link' legacyBehavior={true} href="/boilers-maintenance/">
                                  <a className="nav-link dropdown-item">Boiler Maintainance</a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className='nav-link' legacyBehavior={true} href="/boilers-installation/">
                                  <a className="nav-link dropdown-item">Boiler Installation</a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className='nav-link' legacyBehavior={true} href="/boilers-repair/">
                                  <a className="nav-link dropdown-item">Boiler Repair</a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className='nav-link' legacyBehavior={true} href="/boilers-service/">
                                  <a className="nav-link dropdown-item">Boiler Services</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/tankless-water-heaters/">
                              <a className="nav-link dropdown-item">Tankless Water Heaters</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/rebates-and-promotions/">
                              <a className="nav-link dropdown-item">Rebates And Promotions</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/emergency/">
                              <a className="nav-link dropdown-item">Emergency</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/lennox-hvac/">
                              <a className="nav-link dropdown-item">Lenonox hvac</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/financing-option/">
                              <a className="nav-link dropdown-item">Financing Option</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/furnace-inspection/">
                              <a className="nav-link dropdown-item">Furnance Inspection</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown dropdown3'>
                        <Link className='nav-link' legacyBehavior={true} href="/service-areas/">
                          <a className='nav-link dropdown-toggle' id="navbardropdown3" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">Areas</a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-3 p-2 border-0" aria-labelledby="navbarDropdown">
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/vancouver/">
                              <a className="nav-link dropdown-item">Vancouver</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/burnaby/">
                              <a className="nav-link dropdown-item">Burnaby</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/west-vancouver/">
                              <a className="nav-link dropdown-item">West Vancouver</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/north-vancouver/">
                              <a className="nav-link dropdown-item">North Vancouver</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/coquitlam/">
                              <a className="nav-link dropdown-item">Coquitlam</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/richmond/">
                              <a className="nav-link dropdown-item">Richmond</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/white-rock/">
                              <a className="nav-link dropdown-item">White-Rock</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/tsawwassen/">
                              <a className="nav-link dropdown-item">Tsawwassen</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/port-moody/">
                              <a className="nav-link dropdown-item">Port Moody</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/pitt-meadows/">
                              <a className="nav-link dropdown-item">Pitt Meadows</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/new-westminster/">
                              <a className="nav-link dropdown-item">New Westminster</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/maple-ridge/">
                              <a className="nav-link dropdown-item">Maple Ridge</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown dropdown4'>
                        <Link className='nav-link' legacyBehavior={true} href="/about-us/">
                          <a className='nav-link dropdown-toggle' id="navbardropdown4" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">About us</a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-4 p-2 border-0" aria-labelledby="navbarDropdown">
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/write-a-review/">
                              <a className="nav-link dropdown-item">Write a Review</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/careers/">
                              <a className="nav-link dropdown-item">Careers</a>
                            </Link>
                          </li>                      
                        </ul>
                      </li>
                      <li className='nav-item dropdown dropdown5'>
                        <Link className='nav-link' legacyBehavior={true} href="/brand/">
                          <a className='nav-link dropdown-toggle' id="navbardropdown5" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">Brand</a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-5 p-2 border-0" aria-labelledby="navbarDropdown">
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/lennox/">
                              <a className="nav-link dropdown-item">Lennox</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/carrier/">
                              <a className="nav-link dropdown-item">Carrier</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/trane/">
                              <a className="nav-link dropdown-item">Trane</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/amana/">
                              <a className="nav-link dropdown-item">Amana</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/bryant/">
                              <a className="nav-link dropdown-item">Bryant</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/goodman/">
                              <a className="nav-link dropdown-item">Goodman</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/american-standard/">
                              <a className="nav-link dropdown-item">American Standard</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/ameristar/">
                              <a className="nav-link dropdown-item">Ameristar</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/aire-flo/">
                              <a className="nav-link dropdown-item">Aire Flo</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/keeprite/">
                              <a className="nav-link dropdown-item">Keeprite</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/daikin/">
                              <a className="nav-link dropdown-item">Daikin</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/payne/">
                              <a className="nav-link dropdown-item">Payne</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/coleman/">
                              <a className="nav-link dropdown-item">Coleman</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/rinnai/">
                              <a className="nav-link dropdown-item">Rinnai</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/viessmann/">
                              <a className="nav-link dropdown-item">Viessmann</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/york-brand/">
                              <a className="nav-link dropdown-item">York Brand</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/navien/">
                              <a className="nav-link dropdown-item">Navien</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/maytag-hvac/">
                              <a className="nav-link dropdown-item">Maytag hvac</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/luxaire/">
                              <a className="nav-link dropdown-item">Luxaire</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/comfortmaker/">
                              <a className="nav-link dropdown-item">Comfortmaker</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/arcoaire/">
                              <a className="nav-link dropdown-item">Arcoaire</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/tempstar/">
                              <a className="nav-link dropdown-item">Tempstar</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/heil-hvac/">
                              <a className="nav-link dropdown-item">Heil hvac</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/day-and-night-hvac/">
                              <a className="nav-link dropdown-item">Day And Night hvac</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/armstrong/">
                              <a className="nav-link dropdown-item">Armstrong</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/concord-air/">
                              <a className="nav-link dropdown-item">Concord Air</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/frigidaire/">
                              <a className="nav-link dropdown-item">Frigidaire</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/kenmore/">
                              <a className="nav-link dropdown-item">Kenmore</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      
                      <li className='nav-item'>
                        <Link className='nav-link' legacyBehavior={true} href="/contact-us/">
                          <a className='nav-link'>Contact us</a>
                        </Link>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </nav> : <nav className='navbar navbar-expand-xl bg-transparent py-1 shadow'>
          <Button className="menu-icon" onClick={() => setClicked(!clicked)}>
            {clicked ? <Close className='text-white' /> : <Menu />}
          </Button>
          <Link className='nav-link' legacyBehavior={true} href="/">
            <a className="navbar-brand">
              <Image src={blueLogo} alt="Terresenheating Logo" title='Teressenheating Logo' layout='responsive' />
            </a>
          </Link>
          <Box>
            <GreyFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="BOOK NOW" />
          </Box>
          <Box className={`${clicked ? 'nav-menu active' : 'nav-menu'}`}>
            <Box className="d-flex justify-content-center align-items-center">
              <Link className='nav-link' legacyBehavior={true} href="/">
                <a className="navbar-brand">
                  <Image src={greyLogo} alt="Terresenheating Logo" title='Teressenheating Logo' layout='responsive' />
                </a>
              </Link>
            </Box>
            <Box p={3}>
            <ul className="navbar-nav">
              <li onClick={closeMobileMenu}>
                <Link className='nav-link' legacyBehavior={true} href="/">
                  <a className="text-white nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item dropdownListItem">
                <Box className='d-flex align-items-center'>
                  <Link className='nav-link' legacyBehavior={true} href="/services/">
                    <a className="nav-link text-white" onClick={closeMobileMenu} style={{color:'#fff !important'}}>Services</a>
                  </Link>
                  <IconButton onClick={() => { setServiceDropdown(!servicesDropdown) }}>
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
              </li>
              {servicesDropdown ? <Dropdowns menu="services" closeMobileMenu={closeMobileMenu} /> : null}
              <li className="nav-item dropdownListItem">
                <Box className='d-flex align-items-center'>
                  <Link className='nav-link' legacyBehavior={true} href="/service-areas/">
                    <a className="nav-link text-white" onClick={closeMobileMenu} style={{color:'#fff !important'}}>Areas</a>
                  </Link>
                  <IconButton onClick={() => { setServiceDropdown(false); setAreasDropdown(!areasDropdown) }}>
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
              </li>
              {areasDropdown ? <Dropdowns menu="areas" closeMobileMenu={closeMobileMenu} /> : null}
              <li className="nav-item dropdownListItem">
                <Box className='d-flex align-items-center'>
                  <Link className='nav-link' legacyBehavior={true} href="/about-us/">
                    <a className="nav-link text-white" onClick={closeMobileMenu} style={{color:'#fff !important'}}>About us</a>
                  </Link>
                  <IconButton onClick={() => { setServiceDropdown(false); setAreasDropdown(false); setAboutDropdown(!aboutDropdown) }}>
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
              </li>
              {aboutDropdown ? <Dropdowns menu="about" closeMobileMenu={closeMobileMenu} /> : null}
              <li className="nav-item dropdownListItem">
                <Box className='d-flex align-items-center'>
                  <Link className='nav-link' legacyBehavior={true} href="/brand/">
                    <a className="nav-link text-white" onClick={closeMobileMenu} style={{color:'#fff !important'}}>Brand</a>
                  </Link>
                  <IconButton onClick={() => { setServiceDropdown(false); setAreasDropdown(false); setAboutDropdown(false); setBrandDropdown(!brandDropdown) }}>
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
              </li>
              {brandDropdown ? <Dropdowns menu="brand" closeMobileMenu={closeMobileMenu} /> : null}
              {/* <li onClick={closeMobileMenu}>
                <Link className='nav-link' legacyBehavior={true} href="/blog/">
                  <a className="text-white nav-link">BLOG</a>
                </Link>
              </li> */}
              <li onClick={closeMobileMenu}>
                <Link className='nav-link' legacyBehavior={true} href="/contact-us/">
                  <a className="text-white nav-link">Contact us</a>
                </Link>
              </li>
              </ul>
            </Box>
          </Box>
        </nav>
      }

    </>
  )
}

export default Navbar
