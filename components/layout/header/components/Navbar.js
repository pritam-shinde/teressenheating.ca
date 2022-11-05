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
  const [width, setWidth] = useState();
  const [clicked, setClicked] = useState(false);
  const [servicesDropdown, setServiceDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [brandDropdown, setBrandDropdown] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

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
                    <a className='navbar-brand'><Image layout='responsive' src={blueLogo} alt="logo" /></a>
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
                          <a className="nav-link dropdown-toggle" id="navbardropdown1" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">SERVICES</a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-1 p-2 border-0" aria-labelledby="navbarDropdown">
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/heating-services/">
                              <a className="nav-link dropdown-item">HEATING</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/air-conditioning-service/">
                              <a className="nav-link dropdown-item">COOLING</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/commercial-hvac/">
                              <a className="nav-link dropdown-item">COMMERCIAL HVAC</a>
                            </Link>
                          </li>
                          <li className="nav-item dropdown dropdown2">
                            <Link className='nav-link' legacyBehavior={true} href="/boilers/">
                              <a className="nav-link dropdown-toggle text-dark" id="navbardropdown2" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true" style={{ color: "#000 !important" }}>BOILER</a>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-2 p-2 border-0" aria-labelledby="navbarDropdown">
                              <li className="nav-item">
                                <Link className='nav-link' legacyBehavior={true} href="/boilers-maintenance/">
                                  <a className="nav-link dropdown-item">BOILER MAINTAINANCE</a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className='nav-link' legacyBehavior={true} href="/boilers-installation/">
                                  <a className="nav-link dropdown-item">BOILER INSTALLATION</a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className='nav-link' legacyBehavior={true} href="/boilers-repair/">
                                  <a className="nav-link dropdown-item">BOILER REPAIR</a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className='nav-link' legacyBehavior={true} href="/boilers-service/">
                                  <a className="nav-link dropdown-item">BOILER SERVICES</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/tankless-water-heaters/">
                              <a className="nav-link dropdown-item">TANKLESS WATER HEATERS</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/rebates-and-promotions/">
                              <a className="nav-link dropdown-item">REBATES AND PROMOTIONS</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/emergency/">
                              <a className="nav-link dropdown-item">EMERGENCY</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/lennox-hvac/">
                              <a className="nav-link dropdown-item">LENNOX HVAC</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/financing-option/">
                              <a className="nav-link dropdown-item">FINANCING OPTION</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/furnace-inspection/">
                              <a className="nav-link dropdown-item">FURNACE INSPECTION</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown dropdown3'>
                        <Link className='nav-link' legacyBehavior={true} href="/service-areas/">
                          <a className='nav-link dropdown-toggle' id="navbardropdown3" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">AREAS</a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-3 p-2 border-0" aria-labelledby="navbarDropdown">
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/vancouver/">
                              <a className="nav-link dropdown-item">VANCOUVER</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/burnaby/">
                              <a className="nav-link dropdown-item">BURNABY</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/west-vancouver/">
                              <a className="nav-link dropdown-item">WEST VANCOUVER</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/north-vancouver/">
                              <a className="nav-link dropdown-item">NORTH VANCOUVER</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/coquitlam/">
                              <a className="nav-link dropdown-item">COQUITLAM</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/richmond/">
                              <a className="nav-link dropdown-item">RICHMOND</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/white-rock/">
                              <a className="nav-link dropdown-item">WHITE-ROCK</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/tsawwassen/">
                              <a className="nav-link dropdown-item">TSAWWASSEN</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/port-moody/">
                              <a className="nav-link dropdown-item">PORT MOODY</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/pitt-meadows/">
                              <a className="nav-link dropdown-item">PITT MEADOWS</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/new-westminster/">
                              <a className="nav-link dropdown-item">NEW WESTMINSTER</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/maple-ridge/">
                              <a className="nav-link dropdown-item">MAPLE RIDGE</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown dropdown4'>
                        <Link className='nav-link' legacyBehavior={true} href="/about-us/">
                          <a className='nav-link dropdown-toggle' id="navbardropdown4" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">ABOUT US</a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-4 p-2 border-0" aria-labelledby="navbarDropdown">
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/write-a-review/">
                              <a className="nav-link dropdown-item">WRITE A REVIEW</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/careers/">
                              <a className="nav-link dropdown-item">CAREERS</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/brand/">
                              <a className="nav-link dropdown-item">BRANDS WE CARRY</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/covid-19/">
                              <a className="nav-link dropdown-item">COVID-19</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown dropdown5'>
                        <Link className='nav-link' legacyBehavior={true} href="/brand/">
                          <a className='nav-link dropdown-toggle' id="navbardropdown5" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">BRAND</a>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-5 p-2 border-0" aria-labelledby="navbarDropdown">
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/lennox/">
                              <a className="nav-link dropdown-item">LENNOX</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/carrier/">
                              <a className="nav-link dropdown-item">CARRIER</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/trane/">
                              <a className="nav-link dropdown-item">TRANE</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/amana/">
                              <a className="nav-link dropdown-item">AMANA</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/bryant/">
                              <a className="nav-link dropdown-item">BRYANT</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/goodman/">
                              <a className="nav-link dropdown-item">GOODMAN</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/american-standard/">
                              <a className="nav-link dropdown-item">AMERICAN STANDARD</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/ameristar/">
                              <a className="nav-link dropdown-item">AMERISTAR</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/aire-flo/">
                              <a className="nav-link dropdown-item">AIRE FLO</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/keeprite/">
                              <a className="nav-link dropdown-item">KEEPRITE</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/daikin/">
                              <a className="nav-link dropdown-item">DAIKIN</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/payne/">
                              <a className="nav-link dropdown-item">PAYNE</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/coleman/">
                              <a className="nav-link dropdown-item">COLEMAN</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/rinnai/">
                              <a className="nav-link dropdown-item">RINNAI</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/viessmann/">
                              <a className="nav-link dropdown-item">VIESSMANN</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/york-brand/">
                              <a className="nav-link dropdown-item">YORK BRAND</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/navien/">
                              <a className="nav-link dropdown-item">NAVIEN</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/maytag-hvac/">
                              <a className="nav-link dropdown-item">MAYTAG HVAC</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/luxaire/">
                              <a className="nav-link dropdown-item">LUXAIRE</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/comfortmaker/">
                              <a className="nav-link dropdown-item">COMFORTMAKER</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/arcoaire/">
                              <a className="nav-link dropdown-item">ARCOAIRE</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/tempstar/">
                              <a className="nav-link dropdown-item">TEMPSTAR</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/heil-hvac/">
                              <a className="nav-link dropdown-item">HEIL HVAC</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/day-and-night-hvac/">
                              <a className="nav-link dropdown-item">DAY AND NIGHT HVAC</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/armstrong/">
                              <a className="nav-link dropdown-item">ARMSTRONG</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/concord-air/">
                              <a className="nav-link dropdown-item">CONCORD AIR</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/frigidaire/">
                              <a className="nav-link dropdown-item">FRIGIDAIRE</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className='nav-link' legacyBehavior={true} href="/kenmore/">
                              <a className="nav-link dropdown-item">KENMORE</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' legacyBehavior={true} href="/blog/">
                          <a className='nav-link'>BLOG</a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' legacyBehavior={true} href="/contact-us/">
                          <a className='nav-link'>CONTACT US</a>
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
              <Image src={blueLogo} alt="Terresenheating Logo" layout='responsive' />
            </a>
          </Link>
          <Box>
            <GreyFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="BOOK NOW" />
          </Box>
          <Box className={`${clicked ? 'nav-menu active' : 'nav-menu'}`}>
            <Box className="d-flex justify-content-center align-items-center">
              <Link className='nav-link' legacyBehavior={true} href="/">
                <a className="navbar-brand">
                  <Image src={greyLogo} alt="Terresenheating Logo" layout='responsive' />
                </a>
              </Link>
            </Box>
            <Box p={3}>
              <li onClick={closeMobileMenu}>
                <Link className='nav-link' legacyBehavior={true} href="/">
                  <a className="text-white nav-link">HOME</a>
                </Link>
              </li>
              <li className="nav-item dropdownListItem">
                <Box className='d-flex align-items-center'>
                  <Link className='nav-link' legacyBehavior={true} href="/services/">
                    <a className="nav-link text-white" onClick={closeMobileMenu}>SERVICES</a>
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
                    <a className="nav-link text-white" onClick={closeMobileMenu}>AREAS</a>
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
                    <a className="nav-link text-white" onClick={closeMobileMenu}>ABOUT US</a>
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
                    <a className="nav-link text-white" onClick={closeMobileMenu}>BRAND</a>
                  </Link>
                  <IconButton onClick={() => { setServiceDropdown(false); setAreasDropdown(false); setAboutDropdown(false); setBrandDropdown(!brandDropdown) }}>
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
              </li>
              {brandDropdown ? <Dropdowns menu="brand" closeMobileMenu={closeMobileMenu} /> : null}
              <li onClick={closeMobileMenu}>
                <Link className='nav-link' legacyBehavior={true} href="/blog/">
                  <a className="text-white nav-link">BLOG</a>
                </Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link className='nav-link' legacyBehavior={true} href="/contact-us/">
                  <a className="text-white nav-link">CONTACT US</a>
                </Link>
              </li>
            </Box>
          </Box>
        </nav>
      }

    </>
  )
}

export default Navbar