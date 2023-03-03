import React from "react"
import axios from "axios"

import "./App.css"

class App extends React.Component {
	state = {
		advice: "",
	}
	// fetchingQuote
	componentDidMount() {
		this.fetchAvice()
	}
	//func to fetch quote
	fetchAvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip

				this.setState({ advice })
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		const { advice } = this.state
		return (
			<div className="app">
				<div className="card">
					<h1 className="heading">{advice}</h1>
				</div>
			</div>
		)
	}
}

export default App

// let advices = []

// //Teste de consumo da API AdviceSlip
// const urlAPI = "https://api.adviceslip.com/advice"
// getAdvices()

// async function getAdvices() {
// 	const res = await fetch(urlAPI)
// 	advices = await res.json()
// 	console.log(advices)
// 	console.table(advices.slip.id)
// 	console.table(advices.slip.advice)
// }

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	)
// }
