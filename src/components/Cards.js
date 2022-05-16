import React from 'react'

const Cards = ({ country, group }) => {

  let language = null
  if(country.languages.length === 1) {
    language = country.languages[0].name
  }

  return (
    <div className='container'>
      {group === "continent" ? <h4>{country.continent.name}</h4> 
      : country.languages.length > 1 ? <h5>{country.languages.map((language) => <span key={language.code}>{language.name}/ </span> )}</h5> :
      <h5>{language}</h5>
      } 
      
      <div className="card shadow p-2 mb-5 bg-body rounded" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{country.emoji} {country.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{country.capital}</h6>
          <hr />
            <h6>Code: {country.code}</h6>
            <h6>Phone: {country.phone}</h6>
            <h6>Native: {country.native}</h6>
            <h6>Currency: {country.currency}</h6>          
        </div>
      </div>
    </div>
  )
}

export default Cards