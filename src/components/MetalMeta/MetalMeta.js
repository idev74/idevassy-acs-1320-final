import data from '../../metal.json';
import './MetalMeta.css'

export default function MetalMeta() {
    return (
        <section className="MetalMeta">
            <p>Total Bands: {data.length}</p>
            <p>Styles: 47</p>
        </section>
    )
}
