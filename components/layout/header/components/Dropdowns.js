import React, { useState } from 'react'
import Link from "next/link";

const Dropdowns = ({ menu, closeMobileMenu }) => {
    const [click, setClick] = useState(false);

    const handleOnClick = () => {
        setClick(!click)
        window.scrollTo(0, 0)
    }
    return (
        <>
            <ul onClick={handleOnClick} className={`${click ? 'dropdownMenu clicked' : 'dropdownMenu'} shadow p-3 bg-white`}>
                {
                    menu === "services" ? [
                        { id: "services-menu-1", link: "/heating-services/", text: "HEATING", submenu: null },
                        { id: "services-menu-2", link: "/air-conditioning-service/", text: "COOLING", submenu: null },
                        { id: "services-menu-3", link: "/commercial-hvac/", text: "COMMERCIAL HVAC", submenu: null },
                        {
                            id: "services-menu-4", link: "/boilers/", text: "BOILER", submenu: [
                                { id: "services-menu-4.1", link: "/boilers-maintenance/", text: "BOILERS MAINTENANCE" },
                                { id: "services-menu-4.2", link: "/boilers-installation/", text: "BOILERS INSTALLATION" },
                                { id: "services-menu-4.3", link: "/boilers-repair/", text: "BOILERS REPAIR" },
                                { id: "services-menu-4.4", link: "/boilers-service/", text: "BOILERS SERVICE" }
                            ]
                        },
                        { id: "services-menu-5", link: "/tankless-water-heaters/", text: "TANKLESS WATER HEATERS", submenu: null },
                        { id: "services-menu-6", link: "/rebates-and-promotions/", text: "REBATES AND PROMOTIONS", submenu: null },
                        { id: "services-menu-7", link: "/emergency/", text: "EMERGENCY", submenu: null },
                        { id: "services-menu-8", link: "/lennox-hvac/", text: "LENNOX HVAC", submenu: null },
                        { id: "services-menu-9", link: "/financing-option/", text: "FINANCING OPTION", submenu: null },
                        { id: "services-menu-10", link: "/furnace-inspection/", text: "FURNACE INSPECTION", submenu: null }
                    ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link legacyBehavior={true} href={item.link}>
                            <a className='nav-link text-dark'>{item.text}</a>
                        </Link>
                        {
                            item.submenu !== null ? <ul className='ps-3 ms-3' style={{ borderLeft: "1px solid #555" }}>
                                {
                                    item.submenu.map(menu => <li className="nav-item mb-2" key={menu.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                                        <Link legacyBehavior={true} href={menu.link}>
                                            <a className='nav-link text-dark'>{menu.text}</a>
                                        </Link>
                                    </li>)
                                }
                            </ul> : null
                        }
                    </li>) : null
                }
                {
                    menu === "areas" ? [
                        { id: "areas-menu-1", link: "/vancouver/", text: "VANCOUVER" },
                        { id: "areas-menu-2", link: "/burnaby/", text: "BURNABY" },
                        { id: "areas-menu-3", link: "/west-vancouver/", text: "WEST VANCOUVER" },
                        { id: "areas-menu-4", link: "/north-vancouver/", text: "NORTH VANCOUVER" },
                        { id: "areas-menu-5", link: "/coquitlam/", text: "COQUITLAM" },
                        { id: "areas-menu-6", link: "/richmond/", text: "RICHMOND" },
                        { id: "areas-menu-7", link: "/white-rock/", text: "WHITE ROCK" },
                        { id: "areas-menu-8", link: "/tsawwassen/", text: "TSAWWASSEN" },
                        { id: "areas-menu-9", link: "/port-moody/", text: "PORT MOODY" },
                        { id: "areas-menu-10", link: "/pitt-meadows/", text: "PITT MEADOWS" },
                        { id: "areas-menu-11", link: "/new-westminster/", text: "NEW WESTMINSTER" },
                        { id: "areas-menu-12", link: "/maple-ridge/", text: "MAPLE RIDGE" },
                    ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link legacyBehavior={true} href={item.link}>
                            <a className='nav-link text-dark'>{item.text}</a>
                        </Link> </li>) : null
                }
                {
                    menu === "about" ? [
                        { id: "about-menu-1", link: "/write-a-review/", text: "WRITE A REVIEW" },
                        { id: "about-menu-2", link: "/careers/", text: "CAREERS" },
                        // { id: "about-menu-3", link: "/brand/", text: "BRANDS WE CARRY" },
                        { id: "about-menu-4", link: "/covid-19/", text: "COVID-19" },
                    ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link legacyBehavior={true} href={item.link}>
                            <a className='nav-link text-dark'>{item.text}</a>
                        </Link> </li>) : null
                }
                {
                    menu === "brand" ? [
                        { id: "brand-menu-1", link: "/lennox/", text: "LENNOX" },
                        { id: "brand-menu-2", link: "/carrier/", text: "CARRIER" },
                        { id: "brand-menu-3", link: "/trane/", text: "TRANE" },
                        { id: "brand-menu-4", link: "/amana/", text: "AMANA" },
                        { id: "brand-menu-5", link: "/bryant/", text: "BRYANT" },
                        { id: "brand-menu-6", link: "/goodman/", text: "GOODMAN" },
                        { id: "brand-menu-7", link: "/american-standard/", text: "AMERICAN STANDARD" },
                        { id: "brand-menu-8", link: "/ameristar/", text: "AMERISTAR" },
                        { id: "brand-menu-9", link: "/aire-flo/", text: "AIRE FLO" },
                        { id: "brand-menu-10", link: "/keeprite/", text: "KEEPRITE" },
                        { id: "brand-menu-11", link: "/daikin/", text: "DAIKIN" },
                        { id: "brand-menu-12", link: "/payne/", text: "PAYNE" },
                        { id: "brand-menu-13", link: "/coleman/", text: "COLEMAN" },
                        { id: "brand-menu-14", link: "/rinnai/", text: "RINNAI" },
                        { id: "brand-menu-15", link: "/viessmann/", text: "VIESSMANN" },
                        { id: "brand-menu-16", link: "/york-brand/", text: "YORK BRAND" },
                        { id: "brand-menu-17", link: "/navien/", text: "NAVIEN" },
                        { id: "brand-menu-18", link: "/maytag-hvac/", text: "MAYTAG HVAC" },
                        { id: "brand-menu-19", link: "/luxaire/", text: "LUXAIRE" },
                        { id: "brand-menu-20", link: "/comfortmaker/", text: "COMFORTMAKER" },
                        { id: "brand-menu-21", link: "/arcoaire/", text: "ARCOAIRE" },
                        { id: "brand-menu-22", link: "/tempstar/", text: "TEMPSTAR" },
                        { id: "brand-menu-23", link: "/heil-hvac/", text: "HEIL HVAC" },
                        { id: "brand-menu-24", link: "/day-and-night-hvac/", text: "DAY AND NIGHT HVAC" },
                        { id: "brand-menu-25", link: "/armstrong/", text: "ARMSTRONG" },
                        { id: "brand-menu-26", link: "/concord-air/", text: "CONCORD AIR" },
                        { id: "brand-menu-27", link: "/frigidaire/", text: "FRIGIDAIRE" },
                        { id: "brand-menu-28", link: "/kenmore/", text: "KENMORE" }
                        ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link legacyBehavior={true} href={item.link}>
                            <a className='nav-link text-dark'>{item.text}</a>
                        </Link> </li>) : null
                }
            </ul>
        </>
    )
}

export default Dropdowns