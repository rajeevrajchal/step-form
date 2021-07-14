import React from 'react';

const CustomInput = (props) => {
    const {ui} = props
    console.log('the ui',{ui})
    return (
        <div>
            {ui}
        </div>
    );
};

export default CustomInput;
