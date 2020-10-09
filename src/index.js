import './styles.css';
import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import ref from './js/constRef'
import fetchCountries from './js/fetchCountries'
import makeOneCountryMarkup from './js/one-contry-markup';
import makeManyCountriesMarkup from './js/many-countries-markup';


const debounce = require('lodash.debounce');
ref.input.addEventListener('input', debounce(getInputQuery, 500))

function getInputQuery() {
    const searchCountry = ref.input.value.trim()
    ref.countriesList.innerHTML = ""
    if (!searchCountry) return;    
    fetchCountries(searchCountry).then(data => {
      if (data.length > 10) {
        return alert({title:'Too many matches found. Please enter a more specific query!'})
      }else if(data.length > 1 && data.length < 11){
        makeManyCountriesMarkup(data)       
      } else{
        makeOneCountryMarkup(data)
      }
    }).catch(error => console.log(error))
  }