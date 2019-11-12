import React from 'react';
import "./buttonNavbar.css"

export default class buttonNavbar extends React.Component {
	render() {
		if(this.props.p_num==this.props.p.id)
		{
			return (
				<div>
				<button type="button" class="btn btn-primary btn-cyan btn-lg btn-rounded waves-effect" id="buttonNavbar-active" onClick={() => this.props.handleClick(this.props.p.id)}>
				<p>{this.props.p.prenom} {this.props.p.nom}</p>
				</button>
				</div>
				);
		}
		else
		{
			return(
				<div>
				<button type="button" class="btn btn-primary btn-cyan btn-lg btn-rounded waves-effect" id="buttonNavbar" onClick={() => this.props.handleClick(this.props.p.id)}>
				<p>{this.props.p.prenom} {this.props.p.nom}</p>
				</button>
				</div>
				);
		}
	}
}