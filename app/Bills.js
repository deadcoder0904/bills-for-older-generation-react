import React, { Component } from 'react'
import RenderSelect from './RenderSelect'
import Alert from 'react-s-alert'

class Bills extends Component {
	constructor() {
		super()
		this.state = {
			cn: '',
			price: ''
		}
		this.setCnValue = this.setCnValue.bind(this);
		this.setPriceValue = this.setPriceValue.bind(this);
	}

	setCnValue(e) {
		const cn = e.target.value;
		this.setState({ cn });
		this.props.setCn(cn);
	}

	setPriceValue(e) {
		const price = e.target.value;
		this.setState({ price });
		this.props.setPrice(price);
	}

	render() {
		const {consumerType,billingUnit,callHandler,setCt,setCn,setPrice,setBu} = this.props;
		return (
			<div id="bill">
				<div id="modal">
					<h3>Electricity Application</h3>
					<div className="label">Consumer Type</div>
					<RenderSelect name="consumer-type" options={consumerType} setStateValue={setCt}/>
					<div className="label">Consumer Number</div>
					<input type="text" placeholder="Enter the consumer no." value={this.state.cn} onChange={this.setCnValue}/>
					<div className="label">Bill Amount</div>
					<input type="number" placeholder="Enter the bill price" value={this.state.price} onChange={this.setPriceValue} />
					<div className="label">Billing Unit (BU)</div>
					<RenderSelect name="billing-unit" options={billingUnit} setStateValue={setBu} />
					<button type="button" className="bttn-material-flat bttn-md bttn-success" id="btn" onClick={callHandler}>Pay Bill</button>
		            <Alert stack={{limit: 1}} />
				</div>
			</div>);
	}
}

export default Bills
