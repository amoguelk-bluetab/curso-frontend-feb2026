"use client";

import { memo, useCallback, useEffect, useState } from "react";

const Timer = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime((t) => t + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <p>{time}</p>;
};

const Messager = () => {
	const [message, setMessage] = useState("Hola!");

	useEffect(() => {
		console.log('? Mensaje programado para enviar: "' + message + '"');
		const timeoutId = setTimeout(() => {
			console.log('?? Mensaje enviado: "' + message + '"');
		}, 3000);

		return () => {
			console.log('?? Mensaje cancelado "' + message + '"');
			clearTimeout(timeoutId);
		};
	}, [message]);

	return (
		<div>
			<label>
				Mensaje:{" "}
				<input value={message} onChange={(e) => setMessage(e.target.value)} />
			</label>
			<h1>{message}</h1>
		</div>
	);
};

const Search = () => {
	const [userId, setUserId] = useState(1);
	const [user, setUser] = useState(null);

	useEffect(() => {
		let ignoreRequest = false;
		setUser(null);
		fetch(`https://dummyjson.com/users/${userId}`)
			.then((resp) => resp.json())
			.then((data) => {
				if (!ignoreRequest) {
					setUser(data);
				}
			});

		return () => {
			ignoreRequest = true;
		};
	}, [userId]);

	const fullName = user?.firstName + " " + user?.lastName;

	return (
		<div>
			<select value={userId} onChange={(e) => setUserId(e.target.value)}>
				<option value={1}>User 1</option>
				<option value={2}>User 2</option>
				<option value={3}>User 3</option>
			</select>
			<h1>{user ? fullName : "Cargando..."}</h1>
		</div>
	);
};

const HeavyComponent = memo(({ flag }) => {
	console.log("Renderizar componente muy pesado");

	return <p>Mi bandera está {flag ? "encendida" : "apagada"}</p>;
});

const Submit = memo(({ onSubmit, disable }) => {
	const [data, setData] = useState({ x: 0, y: 0 });

	console.log("Renderizar Submit");

	return (
		<div>
			<label>
				X:{" "}
				<input
					id="x"
					value={data.x}
					onChange={(e) => setData({ ...data, x: e.target.value })}
					type="number"
				/>
			</label>
			<label>
				Y:{" "}
				<input
					id="y"
					value={data.y}
					onChange={(e) => setData({ ...data, y: e.target.value })}
					type="number"
				/>
			</label>
			<button disabled={disable} onClick={() => onSubmit(data)}>
				Send
			</button>
		</div>
	);
});

const Effects = () => {
	const [isShown, setIsShown] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [silly, setSilly] = useState(false);

	const handleSubmit = useCallback(
		({ x, y }) => {
			if (!isDisabled) alert(`x = ${x}, y = ${y}`);
		},
		[isDisabled],
	);

	return (
		<>
			<label>
				<input
					type="checkbox"
					id="isDisabled"
					checked={isDisabled}
					onChange={() => setIsDisabled(!isDisabled)}
				/>{" "}
				{!isDisabled ? "Activar" : "Desactivar"} las alertas
			</label>
			<label>
				<input
					type="checkbox"
					id="silly"
					checked={silly}
					onChange={() => setSilly(!silly)}
				/>{" "}
				Checkbox sin sentido
			</label>
			{isShown && <Submit onSubmit={handleSubmit} disable={isDisabled} />}
			<button onClick={() => setIsShown(!isShown)}>Toggle</button>
		</>
	);
};

export default Effects;
