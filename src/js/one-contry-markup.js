import ref from './constRef'
import oneCountryTemplate from '../templates/template-one-country.hbs'

export default function makeOneCountryMarkup(value){
    const oneCountryMarkup = oneCountryTemplate(value);
    ref.countriesList.insertAdjacentHTML('beforeend', oneCountryMarkup);
}