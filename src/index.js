import React from "react";
import ReactDOM from "react-dom";

const BUTCHER_PRODUCTS = ["Tenderloin", "Short ribs", "Beef shin", "Ribeye"]

class OlderCoaster extends React.Component {
	render() {
		return (
			<div className="oldercoaster">
				<p>Two grannies having the time of their life!</p>
				<p>Passengers:</p>
				<ul><li>Agnes</li><li>Muriel</li></ul>
			</div>
		)
	}
}

class InFrontOfYou extends React.Component {
	render() {
		return (
			<div>
				<p>You shouldn't look too far.</p>
				<p>Sometimes, the solution is right in front of you.</p>
			</div>
		)
	}
}

class ButcherShop extends React.Component {
	render() {
		return (
			<div className="butcher-shop">
				<p>Hello! We have the following products for sale today:</p>
				<ul>{BUTCHER_PRODUCTS.map(product => <li>{product}</li>)}</ul>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<OlderCoaster />
				<InFrontOfYou />
				<ButcherShop />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"))

export {OlderCoaster, InFrontOfYou, ButcherShop}
