import data from '../metal.json';

export default function MetalMeta() {
    return (
        <section className="metal-meta">
            <p>Total Bands: {data.length}</p>
            <p>Styles: 47</p>
             {/* fetch the number of styles from metal.json */}
        </section>
    )
}
