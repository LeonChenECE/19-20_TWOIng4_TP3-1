import React from 'react';
import './Profile.css';

export default class Profile extends react.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			//Container Profil
			<div className = "Profil">

			//Couleur favori du ultraliter
			<div className = "ultraliter" style={{backgroundColor: this.props.ultraliter.background}}>

			//Ses infos + sa photo de profil
			<img className="Profile_Picture" src={this.props.ultraliter.img} alt="Profile Picture"/>
				<div class="wrapper">
				  <div class="Prenom"><b>Prenom :</b> {this.props.ultraliter.prenom}</div>
				  <div class="Nom"><b>Nom : </b> {this.props.ultraliter.nom}</div>
				  <div class="Date"><b>Date de naissance : </b>{this.props.ultraliter.date}</div>
				</div>
				<p className="BgButtonContainer">
				<button type="button" class="btn btn-primary btn-indigo btn-lg btn-rounded waves-effect" onClick={() => this.props.changeStyle(this.props.personne.id)} >Change style</button>
				</p>
			</div>
			<div className="Post">
				<h2 className="title">Dernière publication</h2>
				<p className="the-post">"{this.props.personne.post}"</p>
				<button type="button" class="btn btn-primary btn-cyan btn-lg btn-rounded waves-effect" onClick={() => this.props.addLike(this.props.ultraliter.id)}>{this.props.ultraliter.like} 👍 C'est super !</button>
			</div>

			</div>
			)
	}
}