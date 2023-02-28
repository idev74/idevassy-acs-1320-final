import React, { useState } from "react";
import data from '../metal.json';
import Band from './Band';

export default function BandList() {
    const [query, setQuery] = useState('')
    const bands = data
        .filter(obj => obj.band_name.toLowerCase().includes(query.toLowerCase()) || obj.formed.toLowerCase().includes(query.toLowerCase()))
        .map(({ band_name, formed, origin, fans }) => {
            return (
                <Band
                    band_name={band_name}
                    formed={formed}
                    origin={origin}
                    fans={fans}
                />
            )
        })
    return (
        <div className="BandList">
            <form>
                <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {bands}
        </div>
    )
}