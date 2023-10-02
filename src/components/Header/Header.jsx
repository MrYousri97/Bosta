import React from 'react'
import './header.css'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
import Navbar from '../navBar/Navbar'
import Footer from '../Footer/Footer'
import home from '../../assets/home.jpg'
const Header= () => {
  const {t,i18n} = useTranslation();
  return (
    <>  
        <Navbar/>
        <div className='container home'>
          <div>
            <h1 >{t('h1')}</h1>
            <h3>{t('h3')}</h3>
            <button className='header-button'>{t('button')}</button>
          </div>
            <div><img className='home-img' src={home} alt="shipment" width={850} /></div>
        </div>
        <Footer/>
    </>
  )
}

export default Header
