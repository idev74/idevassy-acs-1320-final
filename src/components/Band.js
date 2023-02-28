import React from 'react';

export default function Band(props) {
const { band_name, formed, origin, fans } = props
console.log(props)
    return (
        <div className="band">
            <h1>{band_name}</h1>
            <p>Formed: {formed}</p>
            <p>{origin}</p>
            <p>Fans: {fans}</p>
        </div>
    )
}