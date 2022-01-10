import { useState } from 'react'


const SearchInfo = ({ onAdd, onAnswer }) => {
    const[race, setRace] = useState('')
    const[year, setYear] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!race) {
            alert('Please enter a race')
            return
        }

        onAdd({ race, year })
        setRace('')
        setYear('')
    }


    return (
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label> Race :</label>
                    <input type='text' placeholder='Enter Race' value={race} onChange={(e) => setRace(e.target.value) } />
                </div>
                <div className='form-control'>
                    <label> Year : </label>
                    <input type='text' placeholder='Enter Year' value={year} onChange={(e) => setYear(e.target.value) } />
                </div>
                
                <input type='submit' value='Save Answer' className='' onClick={onAnswer} />

            </form>
    )
}

export default SearchInfo
