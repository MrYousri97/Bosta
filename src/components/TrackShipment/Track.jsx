import React, { useEffect, useState } from 'react'
import './track.css'
import Table from 'react-bootstrap/Table';
import report from '../../assets/report.png'
import {RiVerifiedBadgeFill} from 'react-icons/ri'
import {GiNotebook} from 'react-icons/gi'
import {LuPackageCheck} from 'react-icons/lu'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {AiOutlineFileDone} from 'react-icons/ai'
import {redirect, useLocation, useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../navBar/Navbar';
import getData from '../../getData/getData';
import loading from '../../assets/loading.jpg'
import i18n from '../i18n/i18n'
import { useTranslation } from 'react-i18next'

const Track = () => {
  const navigate =useNavigate();
  const {t,i18n} = useTranslation();
  const [data, setData] = useState();
  const location = useLocation();
  const fetchData =  async () => {
    const response = await getData(location.state)
    setData(response)
  }
  useEffect(()=>{
    fetchData()
  },[] )

  if(!data){ 
    return( 
      <>
    <div className='loading'><img src={loading} width={800} /></div>
    <div className='loading-data'>
      <div><h1>Data Not Found</h1></div>
      <div><button onClick={()=> navigate('/search')} className='search-again'>Search Again</button></div>
      </div>
    </>
  
  )
  }
  const setTrack =()=>{
    if(data.CurrentStatus.state==="DELIVERED"){
      return(
        <>
          <div className="ship-details3" dir='ltr'>
            <ul>
              <li>
              <GiNotebook className='state'/>
              <div className='active-deliver start progress-one'>
                <p>1</p>
                <RiVerifiedBadgeFill className='icon'/>
              </div>
                <p className='text'>{t('TicketCreated')}</p>
              </li>
              <li>
              <LuPackageCheck className='state'/>
              <div className='active-deliver start progress-two'>
                <p>2</p>
                <RiVerifiedBadgeFill className='icon'/>
              </div>
            <p className='text'>{t('PackageReceived')}</p>
          </li>
          <li>
            <LiaShippingFastSolid className='state'/>
            <div className='active-deliver start progress-three'>
              <p>3</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('OutForDelivery')}</p>
          </li>
          <li>
            <AiOutlineFileDone className='state'/>
            <div className='active-deliver start progress-four'>
              <p>4</p>
              <RiVerifiedBadgeFill className='icon'/> 
            </div>
            <p className='text'>{t('Delivered')}</p>
          </li>
        </ul>
      </div>
        </>
      )
    }
    else if (data.CurrentStatus.state ==='CANCELLED'){
      return(
        <>
        <div className="ship-details3" dir='ltr'>
        <ul>
          <li>
            <GiNotebook className='state'/>
            <div className='active start progress-one'>
              <p>1</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('TicketCreated')}</p>
          </li>
          <li>
            <LuPackageCheck className='state'/>
            <div className='active start progress-two'>
              <p>2</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('PackageReceived')}</p>
          </li>
          <li>
            <LiaShippingFastSolid className='state'/>
            <div className=' active start progress-three'>
              <p>3</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('OutForDelivery')} <br />{t('Cancelled')}</p>
          </li>
          <li>
            <AiOutlineFileDone className='state'/>
            <div className=' start progress-four'>
              <p>4</p>
              <RiVerifiedBadgeFill className='icon'/> 
            </div>
            <p className='text'>{t('Delivered')}</p>
          </li>
        </ul>
      </div>
        </>
      )
    }
    else if(data.CurrentStatus.state==='DELIVERED_TO_SENDER'){
      return(
        <>
          <div className="ship-details3" dir='ltr'>
        <ul>
          <li>
            <GiNotebook className='state'/>
            <div className='active-on start progress-one'>
              <p>1</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('TicketCreated')}</p>
          </li>
          <li>
            <LuPackageCheck className='state'/>
            <div className='active-on start progress-two'>
              <p>2</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('PackageReceived')}</p>
          </li>
          <li>
            <LiaShippingFastSolid className='state'/>
            <div className='active-on start progress-three'>
              <p>3</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('OutForDelivery')}</p>
          </li>
          <li>
            <AiOutlineFileDone className='state'/>
            <div className=' start progress-four'>
              <p>4</p>
              <RiVerifiedBadgeFill className='icon'/> 
            </div>
            <p className='text'>{t('Delivered')}</p>
          </li>
        </ul>
      </div> 
        </>
      )
    }
    else{
      return(
        <>
          <div className="ship-details3" dir='ltr'>
        <ul>
          <li>
            <GiNotebook className='state'/>
            <div className='active start progress-one'>
              <p>1</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('TicketCreated')}</p>
          </li>
          <li>
            <LuPackageCheck className='state'/>
            <div className=' start progress-two'>
              <p>2</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('PackageReceived')}</p>
          </li>
          <li>
            <LiaShippingFastSolid className='state'/>
            <div className=' start progress-three'>
              <p>3</p>
              <RiVerifiedBadgeFill className='icon'/>
            </div>
            <p className='text'>{t('OutForDelivery')}</p>
          </li>
          <li>
            <AiOutlineFileDone className='state'/>
            <div className=' start progress-four'>
              <p>4</p>
              <RiVerifiedBadgeFill className='icon'/> 
            </div>
            <p className='text'>{t('Delivered')}</p>
          </li>
        </ul>
      </div> 
        </>
      )
    }
  }
  return (
    <>
    <Navbar/>
    <h1 className='container'>{t('Shipment')}</h1>
    <div className=' container ship-details'>
      <div className='details'>
          <div className="details-1">
            <h5>{t('TrackNo.')} {data.TrackingNumber}</h5>
            <h4>{data.CurrentStatus.state.replace('_',' ').replace('_',' ')}</h4>
          </div>
          <div className="details-2">
            <h5>{t('LastUpdate')}</h5>
            <h4>{data.CurrentStatus.timestamp.slice(0,10)}</h4>
          </div>
          <div className="details-3">
            <h5>{t('Name')}</h5>
            <h4>SOUQ.com</h4>
          </div>
          <div className="details-4">
            <h5>{t('DeliveryTime')}</h5>
            <h4>{data.CurrentStatus.timestamp.slice(0,10)}</h4>
          </div>
      </div>
      <div>{setTrack()}</div>

    </div>
    <div className='container tracking'>
      <div  className=' container table'>
        <h4>{t('ShipmentDescription')}</h4>
      <Table striped bordered >
      <thead>
        <tr>
          <th>{t('Place')}</th>
          <th>{t('Date')}</th>
          <th>{t('Time')}</th>
          <th>{t('Description')}</th>
        </tr>
      </thead>
      <tbody>
        {
          (data.TransitEvents).map((item)=>(
            <tr key={item.id}>
            <td>{item.hub}</td>
            <td>{item.timestamp.slice(0,10)}</td>
            <td>{item.timestamp.slice(11,16)}</td>
            <td>{item.state.replace('_',' ').replace('_',' ').replace('_',' ')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
      </div>
      <div className='container address'>
        <h4>{t('Address')}</h4>
        <p className='address-details'>
        {t('Address-details')}
        </p>
          <div className='address-problem'>
              <div className='img'><img src={report} alt="report" width={40}/></div>
              <div className='report-details'>
                <h5>{t('error')}</h5>
                <button className='report-button'>{t('error-report')}</button>
              </div>
          </div>
        
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Track
