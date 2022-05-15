import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { countries } from '../queryGql/Countries'
import Loading from '../components/Loading';

const Home = () => {

    const { data, error, loading } = useQuery(countries);

    const carga = true
    return (
        <div className="container mt-4 text-center">
            <h2>COUNTRY SEARCH</h2>
            {
                loading 
                ? <Loading /> 
                : data && data.countries.map(country => <h6 key={country.code}>{country.name} {country.emoji}</h6>)
            }
        </div>
    )
}

export default Home
 /* <h2>
        My first Apollo app{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h2> */