const fetchOptions = {
    headers : {
        'x-api-key' : process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
    },
};

const fetchPostOptions = {
    headers : {
        'x-api-key' : process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
    },
    method: "POST"
};

export default fetchOptions;
export { fetchPostOptions };