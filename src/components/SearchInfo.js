import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


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
                <Container id="Inner">
                    <Row>
                    <Col></Col>
                    <Col>
                <div className='form-control w-20 p-5'>
                    <label> Race :</label>
                    <input type='text' placeholder='Enter Race' value={race} onChange={(e) => setRace(e.target.value) } />
                    <p></p>
                    <label> Year : </label>
                    <input type='text' placeholder='Enter Year' value={year} onChange={(e) => setYear(e.target.value) } />
                </div>

                <input type='submit' value='Save Answer' className='' onClick={onAnswer} />
                </Col>
                <Col></Col>
                </Row>
                </Container>
            </form>
    )
}

export default SearchInfo
