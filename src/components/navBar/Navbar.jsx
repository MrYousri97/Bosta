import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import './navbar.css'
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next';
import logoAR from '../../assets/logoAR.png'
import i18n from '../i18n/i18n';
const Navbar = () => {
  
  const{t,i18n}=useTranslation();
  const changeLanguage = (ln)=>{
    return () =>{
      if(ln==='ar'){
        document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
        document.getElementsByTagName('img')[0].setAttribute("src",`${logoAR}`)
      }
      else if(ln==='en'){
        document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
        document.getElementsByTagName('img')[0].setAttribute("src",`${logo}`)
      }
      i18n.changeLanguage(ln)

          }
  }
  return (
    <nav className='navbar'>
      <ul className='container'>
        <div className='logo'>
          <li>
            <Link to="/"><img  src={logo} alt="Logo" width={150}/></Link>
          </li>
        </div>
        <div className='nav-content'>
          <div className='dropdown'>
            <button className='dropbtn'>
              {t('products')}
            </button>
            <div className='dropdown-content'>
              <Link to="/">{t('solutions')}</Link>
              <Link to="/">{t('dashboard')}</Link>
              <Link to="/">{t('MobileApp')}</Link>
            </div>
          </div>
          <div className='dropdown'>
            <button className='dropbtn'>
              {t('integrations')}
            </button>
            <div className='dropdown-content'>
              <Link to="/">{t('Shopify')}</Link>
              <Link to="/">{t('WooCommerce')}</Link>
              <Link to="/">{t('Custom APIs')}</Link>
            </div>
          </div>
          <div className='dropdown'>
            <button className='dropbtn'>
              {t('Use Cases')}
            </button>
            <div className='dropdown-content'>
              <Link to="/">{t('SMEs')}</Link>
              <Link to="/">{t('Busniesses')}</Link>
            </div>
          </div>
          <div className="content">
            <Link to="/">{t('Pricing')}</Link>
          </div>
          <div className="content">
            <Link to="/">{t('Blog')}</Link>
          </div>
        </div>
        <div className="nav-rightContent">
            <div className='dropdown'>
            <div className="content">
            <Link to="/Search">{t('Track Shipment')}</Link>
          </div>
                
                
              </div>
            <div className='dropdown'>
              <button className='dropbtn'>
               {t('Language')}
              </button>
              <div className='dropdown-content'>
                <a onClick={changeLanguage('en')}>{t('EN')}</a>
                <a onClick={changeLanguage('ar')}>{t('AR')}</a>
              </div>
            </div>
            <div className="content">
              <Link to="/">{t('Sign In')}</Link>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;