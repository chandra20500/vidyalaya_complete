import React,{Component} from 'react'
import { BrowserRouter,Router, Route, browserHistory,IndexRoute,Link } from "react-router-dom";
import SignUp from './signUp'
import Login from './login'

class App extends Component{
	render(){
		return(
				<div>
					<Login />
				</div>
			)
	}
}

export default App;