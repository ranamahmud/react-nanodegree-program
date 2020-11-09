import React from 'react';

const DeleteLast = (props) => {


    return (
        <div>
            <button onClick={() => props.handleDeleteLastItem()} disabled={props.noItemsFound()}>
                Delete Last Item
        </button>
        </div>
    );
};

export default DeleteLast;