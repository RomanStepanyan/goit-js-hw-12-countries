import ref from './constRef';
import manyCountriesTemplate from '../templates/template-many-countries.hbs'

export default function makeManyCountriesMarkup(value){
    const manyCountriesMarkup = manyCountriesTemplate(value);
    ref.countriesList.insertAdjacentHTML('beforeend', manyCountriesMarkup);
}

