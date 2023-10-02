import React,{useRef} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {useNavigate} from "react-router-dom"
import Navbar from '../navBar/Navbar';
import Footer from '../Footer/Footer';
/* import i18n from '../i18n/i18n' */
import { useTranslation } from 'react-i18next'
const SearchTracker = () => {
    const navigate = useNavigate();
    const {t,i18n} = useTranslation();
    const inputRef = useRef(null);
  return (
    <>  
        <Navbar/>
        <h1 className='container search-head'>{t('Searching')}</h1>
        <div className='container search-title'>
            <div className="search-box">
                <input ref={inputRef} className='search-text' type="text" placeholder={t('track')}/>
                <button onClick={()=> navigate('/track', {state: inputRef.current.value})} className='search-icon'><AiOutlineSearch/></button>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default SearchTracker
