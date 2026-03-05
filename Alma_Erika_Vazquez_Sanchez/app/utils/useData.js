import { useEffect, useState } from "react";

export const useData = (endpoint, limit = 10) => {
	const [data, setData] = useState({ items: null, error: null });

	useEffect(() => {
		let ignoreRequest = false;
		setData({ items: null, error: null });
		fetch(`https://dummyjson.com/${endpoint}?limit=${limit}`)
			.then((resp) => {
				if (resp.ok) return resp.json();
				throw new Error(`Status ${resp.status}`);
			})
			.then((json) => {
				if (!json.hasOwnProperty(endpoint)) {
					throw new Error(`Property ${endpoint} not in response.`);
				}
				if (!ignoreRequest) {
					setData({ ...data, items: json[endpoint] });
				}
			})
			.catch((error) => {
				setData({ ...data, error: error.message });
				console.error(`Error en useData: ${error.message}`);
			});

		return () => {
			ignoreRequest = true;
		};
	}, []);

	return data;
};
