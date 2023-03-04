import React, { useEffect, useState } from "react"
import axios from "axios"

import "./App.css"

export default function App() {
	const [advices, setAdvices] = useState({ slip: { advice: "" } })

	//func to fetch quote
	useEffect(() => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => setAdvices(response.data))
			.catch((error) => console.error(error))
	}, [])
	return (
		<div className="app">
			<div className="card">
				<h1 className="heading">Random Advices</h1>
				<p key={advices.slip.id}>{advices.slip.advice}</p>
			</div>
		</div>
	)
}
