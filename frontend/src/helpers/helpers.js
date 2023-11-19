import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.log(error);
    });

export const api = {
    getAllergiesList:handleError(async () => {
        const res = await axios.get(baseURL + 'allergies');
        return res.data;
    }),
    getAllowedIngredients:handleError(async (json) => {
        const res = await axios.post(baseURL + 'get_ingredients', json);
        return res.data;
    }),
    setDislikedIngredients:handleError(async (json) => {
        const res = await axios.post(baseURL + 'disliked_ingredients', json);
        return res.data;
    }),
    getAllRecipes:handleError(async (json) => {
        const res = await axios.post(baseURL + 'suggest', json);
        return res.data;
    })
};
