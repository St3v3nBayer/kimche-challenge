import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { countries as queryCountries } from '../queryGql/Countries'
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import NoResult from '../components/NoResult';
import RadioGroup from '../components/RadioGroup';

const Home = () => {

    const [countries, setCountries] = useState(null);
    const [copyCountries, setCopyCountries] = useState(null);
    const [count, setCount] = useState(null); 
    const [group, setGroup] = useState("continent");

    const { data, error, loading } = useQuery(queryCountries);

    useEffect(() => {
        if (data) {
            setCountries(data.countries);
            setCopyCountries(data.countries);
        }
    }, [data])

    if (error) return error;

    const handleFilter = (buscar) => {
        let result = copyCountries.filter((element) => {
            if (element.name.toString().toLowerCase().includes(buscar.toLowerCase())) {
                return element
            }
            return "";
        })
        setCount(result.length);
        setCountries(result);
    }

    const handleGroup = (e) => {
        setGroup(e.target.value);
    }

    return (
        <div className="bg-light text-dark">
            <div className="container">
                <br />
                <div className='text-center'>
                    <button type="button" className="btn btn-dark position-relative w-75 rounded-pill">
                        <h2>COUNTRY SEARCH</h2>
                        {countries && count !== copyCountries.length
                            && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {count}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        }

                    </button>
                </div>

                <SearchBar filtro={handleFilter} />

                <RadioGroup group={group} handleGroup={handleGroup}/>

                {
                    loading
                        ? <Loading />
                        : countries && countries.length > 0?
                        <div className='row'>
                            {
                                countries.map(country => (
                                    <div className='col-sm-4' key={country.code}>
                                        <Cards country={country} group={group}/>
                                    </div>
                                ))
                            }
                        </div>
                        : <NoResult />
                }
            </div>
        </div>
    )
}

export default Home