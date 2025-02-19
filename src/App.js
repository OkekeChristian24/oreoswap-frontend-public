import React, { Component } from 'react';
import "./App.css";

// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import StatisticSection from "./components/StatisticSection"
import Body from "./components/Body"
import Features from "./components/Features"
import Community from "./components/Community"
import Footer from "./components/Footer"
// vectors
import everGrowingDarkBg from "./vectors/ever-growing-vector-dark.svg"
import everGrowingLightBg from "./vectors/ever-growing-vector-light.svg"

class App extends Component {
	state = {
		isClicked: false,
		toggleNavbar: false
	}
	render(){
		const toggleMode = () => {
			this.setState({
				isClicked: !this.state.isClicked
			})
		}
		const handleClick = () => {
			this.setState({
				toggleNavbar: !this.state.toggleNavbar
			})
		}
		return(
			<div className={this.state.isClicked ? "darkmode" : "lightmode"}>
			    <Header 
			    	isClicked = {this.state.isClicked}
			    	toggleMode = {toggleMode}
			    	toggleNavbar= {this.state.toggleNavbar}
			    	handleClick ={handleClick}
			    />
			    <Banner 
			    	isClicked = {this.state.isClicked}
			    />
				<StatisticSection
				 	isClicked = {this.state.isClicked}
				/>
				<Body 
			    	isClicked = {this.state.isClicked}
			    	everGrowingDarkBg = { everGrowingDarkBg }
			    	everGrowingLightBg = { everGrowingLightBg }
			    />
				
				<Features className="curly-img"
					isClicked = {this.state.isClicked}
				/>
			    <Community 
			    	isClicked = {this.state.isClicked}
			    />
			    <Footer
			    	isClicked = {this.state.isClicked}
			     />
		    </div>
		)
	}
}

export default App;
