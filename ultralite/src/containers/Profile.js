import React from 'react';
import './Profile.css';

export default class Profile extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className = "Profile">

			<div className = "ultraliter">

			<img className="Profile_Picture" src={this.props.ultraliter.img} alt="Profile Picture"/>
				<div class="wrapper">
				  <div class="Prenom"><b>Prenom :</b> {this.props.ultraliter.prenom}</div>
				  <div class="Nom"><b>Nom : </b> {this.props.ultraliter.nom}</div>
				  <div class="Date"><b>Date de naissance : </b>{this.props.ultraliter.date}</div>
				</div>

			</div>
			<div className="Post">
				<h2 className="title">Dernière publication</h2>
				<p className="the-post">"{this.props.ultraliter.post}"</p>
				<button type="button" onClick={() => this.props.addLike(this.props.ultraliter.id)}>{this.props.ultraliter.like} 👍 C'est super !</button>
			</div>

			</div>
			)
	}
}