import React from 'react'

const RadioGroup = ({ group, handleGroup }) => {

    return (
        <div className='mb-5'>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <h3 className='me-3'>Group by:</h3>
                <input onChange={handleGroup} value="continent" checked={group === "continent" ? true : false} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                <label className="btn btn-outline-secondary" htmlFor="btnradio1"><h5>Continent</h5></label>
                <input onChange={handleGroup} checked={group === "language" ? true : false} value="language" type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                <label className="btn btn-outline-secondary" htmlFor="btnradio2"><h5>Language</h5></label>
            </div>
        </div>
    )
}

export default RadioGroup