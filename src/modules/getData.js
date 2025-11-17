const getData = () => {
	return fetch('https://jsonplaceholder.typicode.com/users/1/posts')
		.then((response) => {
			return response.json()
		})
}
export default getData