import React, { useState } from "react";
import data from '../metal.json';
import Band from './Band';
import Like from "./Like";

export default function BandList() {
    const [query, setQuery] = useState('')
    // const styles = bands.style.split(',');
    const bands = data
        .filter(obj => obj.band_name.toLowerCase().includes(query.toLowerCase()) || obj.formed.toLowerCase().includes(query.toLowerCase()))
        .map(({ band_name, formed, origin, fans, style, split }) => {
            return (
                <div className="BandList">
                    <Band
                        key={band_name}
                        band_name={band_name}
                        formed={formed}
                        origin={origin}
                        fans={fans * 1000}
                        style={split === "-" ? `Split: ${split}` : { style }}
                    />
                    <Like />
                </div>
            )
        })
    return (
        <div className="temp">
            <form>
                <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="BandList">
                {bands}
            </div>
        </div>
    )
}