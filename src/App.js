import logo from "./logo.svg"
import "./App.css"

let advices = []

//Teste de consumo da API AdviceSlip
const urlAPI = "https://api.adviceslip.com/advice"
getAdvices()

async function getAdvices() {
	const res = await fetch(urlAPI)
	advices = await res.json()
	console.log(advices)
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
