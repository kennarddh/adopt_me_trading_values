const RootUrl = 'http://127.0.0.1:33507/'

const FetchData = endpoint => {
	return fetch(`${RootUrl}${endpoint}`)
		.then(response => response.json())
		.catch(err => alert(err))
}

export const GetAllItems = async () => {
	const data = await FetchData('item/')

    return data
}