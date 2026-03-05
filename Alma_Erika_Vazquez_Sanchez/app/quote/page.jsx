const Quote = async () => {
	const response = await fetch("https://dummyjson.com/my-quotes/random");

	if (!response.ok) return <p>Ups ({response.status})</p>;

	const { quote, author } = await response.json();

	return (
		<>
			<h3>{quote}</h3>
			<p>{author}</p>
		</>
	);
};

export default Quote;
