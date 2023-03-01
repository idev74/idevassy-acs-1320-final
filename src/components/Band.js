import React from 'react';
import Like from './Like';

export default function Band(props) {

const { band_name, formed, origin, fans, split } = props;
    return (
        <div className="band" border="3px solid white">
            <h1>{band_name}</h1>
            <p><strong>Origin:</strong> {origin}</p>
            <p><strong>Fans: </strong>{fans}</p>
            <p><strong>Formed: </strong>{formed}</p>
            <p><strong>Split: </strong>{split}</p>
        </div>
    )
}