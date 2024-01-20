const COMMON_URL = 'https://youtube-v31.p.rapidapi.com/';
const PARAMS = '&regionCode=IN&maxResults=50&order=date';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c37c8f1femsh6a3c960c3e14d81p1dd9cbjsnca2f6fbb282d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export async function FetchAPI(url)
{   
    let response = await fetch(COMMON_URL+url+PARAMS,options)
    
    let data = await response.json();

	
    return data;
}

export async function VideoDetailsAPI(url)
{
	let response = await fetch(COMMON_URL+url,options);

	let data = await response.json();

	console.log(data)
	return data;
}

export async function RelatedVideosAPI(url)
{
	let response = await fetch(COMMON_URL+url,options);

	let data = await response.json();

	// console.log(data);
	return data;
}
// This shoud be dynamic : ?q=music&part=snippet%2Cid