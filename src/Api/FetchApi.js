const RootUrl = 'http://kennarddh.pythonanywhere.com/'

const FetchData = endpoint => {
	return fetch(`${RootUrl}${endpoint}`, {
		method: 'GET',
	})
		.then(response => response.json())
		.catch(err => alert(err))
}

export const GetRaw = () => {
	return FetchData('item/raw')
}

export const GetAllItems = () => {
	return FetchData('item')
}

export default FetchData
