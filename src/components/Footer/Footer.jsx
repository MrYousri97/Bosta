import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';
const Footer = () => {

  const{t,i18n}=useTranslation();
  return (
    <footer className='footer-container'>
        <div className='container footer-content'>
            <div className="logo"><img src={logo} alt="logo" width={150}/></div>
            <div className='products-content'>
                <h4>{t('products')}</h4>
                <Link to="/">{t('solutions')}</Link>
                <Link to="/">{t('MobileApp')}</Link>
                <Link to="/">{t('dashboard')}</Link>
            </div>
            <div className='Integrations-content'>
                <h4>{t('integrations')}</h4>
                <Link to="/">{t('Shopify')}</Link>
                <Link to="/">{t('WooCommerce')}</Link>
                <Link to="/">{t('Custom APIs')}</Link>
            </div>
            <div className='UseCases-content'>
                <h4>{t('Use Cases')}</h4>
                <Link to="/">{t('SMEs')}</Link>
                <Link to="/">{t('Busniesses')}</Link>
            </div>
            <div className='Company-content'>
                <h4>{t('company')}</h4>
                <Link to="/">{t('About us')}</Link>
                <Link to="/">{t('Careers')}</Link>
                <Link to="/">{t('Pricing')}</Link>
                <Link to="/">{t('FAQ')}</Link>
                <Link to="/">{t('Help Center')}</Link>
            </div>
            <div className="track-shipment">
                <Link to='/Search'>{t('Track Shipment')}</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
