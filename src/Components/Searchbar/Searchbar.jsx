import { useDispatch } from 'react-redux';
import { setSearch } from '../../Store/search/searchSlice';
import './Searchbar.scss'
import { useEffect, useState } from 'react';

export default function Searchbar(){

    const [searchValue,setSearchValue] = useState('');
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearch(searchValue));
    },[searchValue]);

    const handleSearchChange = (e)=>{
        setSearchValue(e.target.value);
    }

    return(
        <>
        <div className='cars-search-container'>
            <div className='cars-search-inputbox'>
                <input type='text' onChange={handleSearchChange} placeholder='search...' className='cars-search-input'/>
                <i className='fa-solid fa-search search-icon'></i>
            </div>
            <div className='cars-search-options'>
                <div className='cars-search-opt1'>
                    <select id="cars-search-relevance" className='cars-search-select' name="cars">
                        <option disabled className='invisible' value="none" selected>Relevance</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select id="cars-search-brands" className='cars-search-select' name="cars" >
                        <option value="none" selected disabled>All Brands</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className='cars-search-opt2'>

                </div>
            </div>
        </div>
        </>
    )
}