import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.log(error);
    });

export const api = {
    getAllTests:handleError(async () => {
        const res = await axios.get(baseURL + 'tests');
        return res.data;
    }),
    /*getAllPacks:handleError(async () => {
        const res = await axios.get(baseURL + 'packs');
        return res.data;
    }),
    getPackByName:handleError(async code => {
        console.log('helper: ' + code);
        const res = await axios.get(baseURL + 'packs/' + code);
        return res.data;
    }),*/
    /*gettask: handleError(async id => {
        const res = await axios.get(baseURL + id);
        return res.data;
    }),
    gettasks: handleError(async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    deletetask: handleError(async id => {
        const res = await axios.delete(baseURL + id);
        return res.data;
    }),
    createtask: handleError(async payload => {
        const res = await axios.post(baseURL, payload);
        return res.data;
    }),
    updatetask: handleError(async payload => {
        const res = await axios.put(baseURL + payload._id, payload);
        return res.data;
    })*/
};
