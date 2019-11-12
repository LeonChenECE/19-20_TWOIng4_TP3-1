import React from 'react';
import './Main.css';
import Switches from './Switches'
import Profile from './Profile'

export default class main extends React.Component {
	constructor(props) {
		super(props);
		this.state =
		{
			profiles : [
			{
				prenom: "Detective",
				nom: "Pikachu",
				date:  "27/02/1996",
				img: "https://cdn-media.rtl.fr/cache/jckmw8ZBHrMgwnB29dcc9w/880v587-0/online/image/2018/1113/7795557510_detective-pikachu-sortira-en-2019.PNG",
				post: "Pika pika.",
				like: 404,
				background : "#2A558C",
				id :0



			},
			{
				prenom: "Bruce",
				nom : "Wayne",
				date : "30/03/1939",
				img: "https://static.lpnt.fr/images/2019/01/31/18018947lpw-18018991-article-jpg_5928200_980x426.jpg",
				post: "I'm Batman.",
				like: 1984,
				background : "#2A558C",
				id:1


			},
			{
				prenom: "Sonic",
				nom : "The Hedgehog",
				date: "23/06/1991",
				img: "https://pmcdeadline2.files.wordpress.com/2019/04/sonic-the-hedgehog.jpg?w=681&h=383&crop=1",
				post:"Catch me if u can !",
				like: 12358,
				background : "#2A558C",
				id:2
			}
			],
			selection : 0
		};
		    this.handleClick = this.handleClick.bind(this);
		    this.addLike = this.addLike.bind(this);
		}
		handleClick(p_number) {
			this.setState({selection: p_number});
		}
		addLike(p_num)
		{
			this.state.profiles[p_num].like = this.state.profiles[p_num].like + 1;
			this.setState({selection: p_num});
		}

		render() {
			return (
				<div className="Main">
				<Switches 
				p1 = {this.state.profiles[0]}
				p2 = {this.state.profiles[1]}
				p3 = {this.state.profiles[2]}
				handleClick = {this.handleClick}
				p_num = {this.state.selection}
				/>

				<button type="button" onclick={() => this.props.handleClick(0)}>Pikachu</button>
				<button type="button" onclick="selection = 2;">Batman</button>
				<button type="button" onclick={() => this.props.handleClick(2)}>Sonic</button>

				<Profile 
				ultraliter = {this.state.profiles[this.state.selection]}
				addLike = {this.addLike}
				/>
				</div>
				);
		}
	}