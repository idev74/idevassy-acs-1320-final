import data from './metal.json';

data.forEach((band, i) => {
    band.id = i;
})

export default data;