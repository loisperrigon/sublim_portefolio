import React from 'react';
import "../scss/btn.scss";

const BTN = ({ buttonText }) => (
    <button>
        {buttonText}
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
        <span className="fourth"></span>
    </button>
);

export default BTN;