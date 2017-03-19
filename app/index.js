import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Alert from 'react-s-alert'
import billingUnit from './billingUnit'
import Bills from './Bills'

import 'react-select/dist/react-select.css'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css'
import './index.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			consumerType: [
				{ value: 'lt', label: 'High-Tension Supply (Bulk)' },
    			{ value: 'ht', label: 'Low-Tension Supply' }
			],
			billingUnit: billingUnit,
			ct: {},
			cn: '',
			price: '',
			bu: {}
		};
		this.setCt = this.setCt.bind(this);
		this.setCn = this.setCn.bind(this);
		this.setPrice = this.setPrice.bind(this);
		this.setBu = this.setBu.bind(this);
		this.callHandler = this.callHandler.bind(this);
	}

	setCt(ct) {
		this.setState({ct});
	}

	setCn(cn) {
		this.setState({cn});
	}

	setPrice(price) {
		this.setState({price});
	}

	setBu(bu) {
		this.setState({bu});
	}

	callHandler() {
		if(this.state.cn.length && this.state.price.length && Object.keys(this.state.ct).length !== 0 && Object.keys(this.state.bu).length !== 0)
			{
				Alert.success('Bill of Rs. ' + this.state.price + ' is Paid Successfully', {
		            position: 'bottom-left',
		            effect: 'bouncyflip',
		            timeout: 5000
		        });
			}
		else {
			Alert.error('Please Fill All the Fields', {
	            position: 'bottom-right',
	            effect: 'bouncyflip',
	            timeout: 3000
	        });
		}
	}

	render() {
		return (
				<div>
					<h1>Bills for Older Generation</h1>
					<Bills consumerType={this.state.consumerType} billingUnit={this.state.billingUnit} callHandler={this.callHandler}
					setCt={this.setCt} setCn={this.setCn} setPrice={this.setPrice} setBu={this.setBu} />
				</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
