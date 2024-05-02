import { getPlaiceholder } from 'plaiceholder';

export const replaceMongoIdInArray = (arr) => {
    const mappedArray = arr.map(({ _id, ...rest }) => ({
        id: _id.toString(),
        ...rest,
    }));

    return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...rest } = obj;
    return { id: _id.toString(), ...rest };
};

export const getBlurData = async (src) => {
    const buffer = await fetch(src).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    );

    const data = await getPlaiceholder(buffer);
    return data;
};
