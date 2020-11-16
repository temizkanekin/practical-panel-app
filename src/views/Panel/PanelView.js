import React from 'react';
import Table from '../../components/Table/Table'
import ManualOverride from '../../components/ManualOverride/ManualOverride'
import './PanelView.css'
const rowCount = 4
const columnCount = 4
const PanelView = () => {
    const [buttonStatesArray, SetButtonsStatesArray] = React.useState([]) //new Array(rowCount).fill(new Array(columnCount).fill(false))
    const setInitialButtonStatesArray = () => {
        let newButtonStatesArray = []
        for (let i = 0; i < rowCount; i++)
            newButtonStatesArray.push(new Array(columnCount).fill(false))
        SetButtonsStatesArray(newButtonStatesArray)
    }
    React.useEffect(() => {
        setInitialButtonStatesArray()
    }, [])
    const handleButtonClick = (rowIndex, columnIndex, isToggleActive) => (e) => {
        let newButtonStatesArray = buttonStatesArray.slice()
        newButtonStatesArray[rowIndex][columnIndex] = typeof isToggleActive === 'undefined' ? !newButtonStatesArray[rowIndex][columnIndex] : isToggleActive
        SetButtonsStatesArray(newButtonStatesArray)
    }
    const handleReset = () => {
        setInitialButtonStatesArray()
    }
    return (
        <div className="panelview-root">
            <Table buttonStatesArray={buttonStatesArray} handleButtonClick={handleButtonClick} handleReset={handleReset} />
            <ManualOverride handleButtonClick={handleButtonClick} />
        </div>
    )
}
export default PanelView