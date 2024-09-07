export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3493bf911fmsh97232d586278e6ep17ea98jsnc6724ced2693',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}