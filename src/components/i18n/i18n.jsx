import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEN from '../../locales/en/translationEN.json'
import translationAR from '../../locales/ar/translationAR.json'

const resources ={
    en:{
        translation:translationEN
    },
    ar:{
        translation: translationAR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:'en',
        
        keySeparator: false,

        interpolation:{
            escapeValue:false
        }
    });
    document.documentElement.lang = i18n.language  // <---- this line right here

export default i18n;