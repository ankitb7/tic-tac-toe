import React from 'react';
import PropTypes from 'prop-types';

const Cells = ({cells, onCellClick}) => {

    return (<>
        {cells.map(
            (cell, index) =>
                <div className='cell' key={index}
                     data-cell-index={index} onClick={() => onCellClick(index)}>
                    {cell}
                </div>
        )}
    </>);
};

Cells.propTypes = {
    cells: PropTypes.array,
    onCellClick: PropTypes.func,
};

Cells.defaultProps = {
    cells: [],
    onCellClick: ()=>{},
};

export default Cells;