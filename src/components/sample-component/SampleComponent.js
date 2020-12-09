import React from 'react'

const SampleComponent = ({ handleAction1, handleAction2 }) => {

    const handleChangeEVent = (e) => {
        e?.stopPropagation();
        handleAction2(e.target.value);
    }

    const handleButtonClickEvent = (e) => {
        e?.stopPropagation();
        handleAction1('button is clicked');
    }

    return (
        <>
        <div>
            Here is SampleComponent
        </div>
        <div>
            Content of SampleComponent
            <input type='text' onChange={handleChangeEVent} />
        </div>
        <button onClick={handleButtonClickEvent}>
            This is a button
        </button>
        </>
    )
}

export {
    SampleComponent
}