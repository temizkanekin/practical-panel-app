import React from 'react';
import { Button } from '../Button/Button'
import './ManualOverride.css'

const ManualOverride = ({ handleButtonClick }) => {
    const [coordinateX, setCoordinateX] = React.useState('')
    const [coordinateY, setCoordinateY] = React.useState('')
    const [coordinateToggle, setCoordinateToggle] = React.useState(undefined)

    const setCoordinate = (type) => (e) => {
        let value = e.target.value
        if (value > 4)
            value = 4
        type.toLowerCase() === 'x' ? setCoordinateX(value) : setCoordinateY(value)
    }

    return (
        <div className="manual-override">
            <span>Manual Override</span>
            <div className="manual-override-select-coordinates">
                <label htmlFor="x">X:</label>
                <input onChange={setCoordinate('x')} type="number" size="1" min={1} max={4} id="x" name="x" value={coordinateX} />
            </div>
            <div className="manual-override-select-coordinates">
                <label htmlFor="y">Y:</label>
                <input onChange={setCoordinate('y')} type="number" size="1" min={1} max={4} id="y" name="y" value={coordinateY} />
            </div>
            <div>
                <span >Set To:</span>
                <input onChange={() => setCoordinateToggle(true)} type="radio" id="typeOn" name="type" />
                <label htmlFor="typeOn">ON</label>
                <input onChange={() => setCoordinateToggle(false)} type="radio" id="typeOff" name="type" />
                <label htmlFor="typeOff">OFF</label>
            </div>
            <Button width="100px" height="35px" disabled={!coordinateX || !coordinateY || typeof coordinateToggle === 'undefined'} onClick={handleButtonClick(coordinateY - 1, coordinateX - 1, coordinateToggle)}>Confirm</Button>
        </div>
    )
}
export default ManualOverride;