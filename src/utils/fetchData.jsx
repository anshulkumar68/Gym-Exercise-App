const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': apiKey,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}