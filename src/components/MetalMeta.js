import data from '../metal.json';

export default function MetalMeta() {
    return (
        <section className="metal-meta">
            <p>Total Bands: {data.length}</p>
            <p>Styles: 47</p>
        </section>
    )
}
