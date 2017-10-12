import React, { Component } from 'react';
import Hero from '../Hero/';
import { Text, TextInput } from 'mintel-react-ui';
import DocTitle from 'react-document-title';

export default class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alert_on: true
        };

        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch() {
        alert.enabled = !this.state.alert_on;
        this.setState({ alert_on: !this.state.alert_on });
    }

	render() {
		return (
			<div className='User'>
				<DocTitle title='User Page'/>
                <Text>hi</Text>
                <TextInput showIcon={false} />
            </div>
		);
	}
}
