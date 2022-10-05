import { Box, Container, Grid } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import blueLogo from '../../../../public/logo/blue-logo.svg'

const Navbar = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])


  return (
    <>
      {
        width > 600 ? <>
          <nav className='navbar navbar-expand-md m-0 p-0'>
            <Container maxWidth="xxl" id="navbar">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box className='d-flex justify-content-between'>
                    <Link href="/">
                      <a className='navbar-brand'>
                        <img src={blueLogo.src} alt="logo" className='img-fluid' />
                      </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <Box className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className='navbar-nav'>
                        <li className='nav-item'>
                          <Link href="/">
                            <a className='nav-link'>HOME</a>
                          </Link>
                        </li>
                        <li className="nav-item dropdown dropdown1">
                          <Link href="#">
                            <a className="nav-link dropdown-toggle" id="navbardropdown1" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">SERVICES</a>
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-1 p-2 border-0" aria-labelledby="navbarDropdown">
                            <li className="nav-item">
                              <Link href="/heating/">
                                <a className="nav-link dropdown-item">HEATING</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/cooling/">
                                <a className="nav-link dropdown-item">COOLING</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/commercial-hvac/">
                                <a className="nav-link dropdown-item">COMMERCIAL HVAC</a>
                              </Link>
                            </li>
                            <li className="nav-item dropdown dropdown2">
                              <Link href="/boiler/">
                                <a className="nav-link dropdown-item dropdown-toggle" id="navbardropdown2" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">BOILER</a>
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-2 p-2 border-0" aria-labelledby="navbarDropdown">
                                <li className="nav-item">
                                  <Link href="/boiler-maintenance/">
                                    <a className="nav-link dropdown-item">BOILER-MAINTENANCE</a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link href="/boiler-installation/">
                                    <a className="nav-link dropdown-item">BOILER-INSTALLATION</a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link href="/boiler-repair/">
                                    <a className="nav-link dropdown-item">BOILER-REPAIR</a>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link href="/boiler-service/">
                                    <a className="nav-link dropdown-item">BOILER-SERVICE</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <Link href="/tankless-water-heaters/">
                                <a className="nav-link dropdown-item">TANKLESS WATER HEATERS</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/rebates-and-promotions/">
                                <a className="nav-link dropdown-item">REBATES AND PROMOTIONS</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/emergency/">
                                <a className="nav-link dropdown-item">EMERGENCY</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/lennox-hvac/">
                                <a className="nav-link dropdown-item">LENNOX HVAC</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/furnace-inspection/">
                                <a className="nav-link dropdown-item">FURNACE INSPECTION</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item dropdown dropdown3'>
                          <Link href="#">
                            <a className='nav-link dropdown-toggle' id="navbardropdown3" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">AREAS</a>
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-3 p-2 border-0" aria-labelledby="navbarDropdown">
                            <li className="nav-item">
                              <Link href="/vancouver/">
                                <a className="nav-link dropdown-item">VANCOUVER</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/burnaby/">
                                <a className="nav-link dropdown-item">BURNABY</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/west-vancouver/">
                                <a className="nav-link dropdown-item">WEST VANCOUVER</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/north-vancouver/">
                                <a className="nav-link dropdown-item">NORTH VANCOUVER</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/coquitlam/">
                                <a className="nav-link dropdown-item">COQUITLAM</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/richmond/">
                                <a className="nav-link dropdown-item">RICHMOND</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/white-rock/">
                                <a className="nav-link dropdown-item">WHITE-ROCK</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/tsawwassen/">
                                <a className="nav-link dropdown-item">TSAWWASSEN</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/port-moody/">
                                <a className="nav-link dropdown-item">PORT MOODY</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/pitt-meadows/">
                                <a className="nav-link dropdown-item">PITT MEADOWS</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/new-westminster/">
                                <a className="nav-link dropdown-item">NEW WESTMINSTER</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/maple-ridge/">
                                <a className="nav-link dropdown-item">MAPLE RIDGE</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item dropdown dropdown4'>
                          <Link href="#">
                            <a className='nav-link dropdown-toggle' id="navbardropdown4" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">ABOUT US</a>
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-4 p-2 border-0" aria-labelledby="navbarDropdown">
                            <li className="nav-item">
                              <Link href="/write-a-review/">
                                <a className="nav-link dropdown-item">WRITE A REVIEW</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/careers/">
                                <a className="nav-link dropdown-item">CAREERS</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/brands-we-carry/">
                                <a className="nav-link dropdown-item">BRANDS WE CARRY</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/covid-19/">
                                <a className="nav-link dropdown-item">COVID-19</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/your-local-lennox-dealer/">
                                <a className="nav-link dropdown-item">YOUR LOCAL LENNOX DEALER</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item dropdown dropdown5'>
                          <Link href="#">
                            <a className='nav-link dropdown-toggle' id="navbardropdown5" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">BRANDS</a>
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-5 p-2 border-0" aria-labelledby="navbarDropdown">
                            <li className="nav-item">
                              <Link href="/lennox/">
                                <a className="nav-link dropdown-item">LENNOX</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/carrier/">
                                <a className="nav-link dropdown-item">CARRIER</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/trane/">
                                <a className="nav-link dropdown-item">TRANE</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/amana/">
                                <a className="nav-link dropdown-item">AMANA</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/bryant/">
                                <a className="nav-link dropdown-item">BRYANT</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/goodman/">
                                <a className="nav-link dropdown-item">GOODMAN</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/ameristar/">
                                <a className="nav-link dropdown-item">AMERISTAR</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/aire-flo/">
                                <a className="nav-link dropdown-item">AIRE FLO</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/keeprite/">
                                <a className="nav-link dropdown-item">KEEPRITE</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/daikin/">
                                <a className="nav-link dropdown-item">DAIKIN</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/payne/">
                                <a className="nav-link dropdown-item">PAYNE</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/coleman/">
                                <a className="nav-link dropdown-item">COLEMAN</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/rinnai/">
                                <a className="nav-link dropdown-item">RINNAI</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/viessmann/">
                                <a className="nav-link dropdown-item">VIESSMANN</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/york-brand/">
                                <a className="nav-link dropdown-item">YORK BRAND</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/navien/">
                                <a className="nav-link dropdown-item">NAVIEN</a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/maytag-hvac/">
                                <a className="nav-link dropdown-item">MAYTAG HVAC</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </nav>
        </> : <nav></nav>
      }
    </>
  )
}

export default Navbar