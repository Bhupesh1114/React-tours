import React from 'react';
import Spinner from "./Spinner-1s-150px.svg";

const Loding = () => {
    return (
        <div className="loading">
            <img src={Spinner} alt="" />
        </div>
    )
}

export default Loding
