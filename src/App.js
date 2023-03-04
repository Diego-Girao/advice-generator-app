import React, { useEffect, useState } from "react"
import dice from "./assets/dice.svg"
import dividerDesktop from "./assets/divider-desktop.svg"
import dividerMobile from "./assets/divider-mobile.svg"

export default function App() {
	const [text, setText] = useState([])

	const fetchAdvice = async () => {
		const res = await fetch("https://api.adviceslip.com/advice")
		const data = await res.json()

		console.log(data)

		setText(data.slip)
	}

	useEffect(() => {
		fetchAdvice()
	}, [])
	return (
		<div className="container">
			<h1>Advice #{text.id}</h1>
			<p>"{text.advice}"</p>

			<picture>
				<source media="(min-width: 768px" srcSet={dividerDesktop} />
				<img src={dividerMobile} alt="" />
			</picture>

			<div>
				<button onClick={fetchAdvice}>
					<img src={dice} alt="" />
				</button>
			</div>
		</div>
	)
}
