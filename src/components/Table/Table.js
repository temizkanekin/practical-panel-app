import React from 'react';
import { Button } from '../Button/Button'
import './Table.css'
const Table = ({ buttonStatesArray, handleButtonClick, handleReset }) => {
    return <table className="table">
        <thead>
            <tr>
                {
                    buttonStatesArray.length > 0 && buttonStatesArray[0].map((column, columnIndex) =>
                        <th key={columnIndex}>{columnIndex + 1}</th>
                    )
                }
            </tr>
        </thead>
        <tbody>
            {
                buttonStatesArray.map((row, rowIndex) =>
                    <tr key={rowIndex} data-content={rowIndex + 1}>
                        {
                            buttonStatesArray[rowIndex].map((column, columnIndex) =>
                                <td key={rowIndex + columnIndex}>
                                    <Button isToggleActive={column} onClick={handleButtonClick(rowIndex, columnIndex)}>
                                        {
                                            column ? "ON" : "OFF"
                                        }
                                    </Button>
                                </td>
                            )
                        }
                    </tr>
                )
            }
        </tbody>
        <tfoot>
            <tr>
                <th colSpan="4"><Button width="100px" height="35px" onClick={handleReset}>RESET</Button></th>
            </tr>
        </tfoot>
    </table>
}
export default Table;