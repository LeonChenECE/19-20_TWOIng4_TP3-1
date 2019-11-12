import React from 'react';
import './main.css';
import navbar from './navbar'
import Profile from './Profile'

export default class main extends React.Component {
	constructor(props) {
		super(props);
		this.state =
		{
			profiles : [
			{
				prenom: "Elliot",
				nom: "Alderson",
				date:  "17/09/1986",
				img: "https://ih1.redbubble.net/image.243903727.1803/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
				post: "Hello friend.",
				like: 404,
				background : "#2A558C",
				id :0



			},
			{
				prenom: "Dolores",
				nom : "Abernathy",
				date : "03/10/2038",
				img: "data:image/jpeg;base64,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",
				post: "These violent delights have violent ends.",
				like: 1984,
				background : "#2A558C",
				id:1


			},
			{
				prenom: "Eleanor",
				nom : "Shellstrop",
				date: "14/10/1982",
				img: "http://www.sparklyprettybriiiight.com/wp-content/uploads/2019/09/That-was-your-life-The-Good-Place-promos-its-final-season-pic-2.jpg",
				post:"Holy motherforking shirtballs!",
				like: 12358,
				background : "#2A558C",
				id:2
			}
			],
			selection : 0
		};
			// Cette liaison est nécéssaire afin de permettre
		    // l'utilisation de `this` dans la fonction de rappel.
		    this.handleClick = this.handleClick.bind(this);
		    this.addLike = this.addLike.bind(this);
		    this.changeStyle = this.changeStyle.bind(this);
		}
		handleClick(p_number) {
			this.setState({selection: p_number});
		}
		addLike(p_num)
		{
			this.state.profiles[p_num].like = this.state.profiles[p_num].like + 1;
			this.setState({selection: p_num});
		}
		changeStyle(p_num) {
			if(this.state.profiles[p_num].background=="#2A558C") {
				this.state.profiles[p_num].background="#49B1F2";
				this.setState({selection: p_num});
			}
			else {
				this.state.profiles[p_num].background="#2A558C";
				this.setState({selection: p_num});
			}
		}

		render() {
			return (
				<div className="Page">
				<Switch 
				p1 = {this.state.profiles[0]}
				p2 = {this.state.profiles[1]}
				p3 = {this.state.profiles[2]}
				handleClick = {this.handleClick}
				p_num = {this.state.selection}
				/>
				<Profil 
				personne = {this.state.profiles[this.state.selection]}
				addLike = {this.addLike}
				changeStyle = {this.changeStyle}
				/>
				</div>
				);
		}
	}