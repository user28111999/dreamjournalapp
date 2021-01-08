import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import App from "./app"
import TabMenu from "./components/tabmenu"

import "./index.scss"

const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>
			<TabMenu />
		</Router>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<Routing />
	</React.StrictMode>,
	document.getElementById("root")
)
