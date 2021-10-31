/*Saving for Current Members Page*/
import React from 'react';
import './Profile.css';
import { SocialIcon } from 'react-social-icons';
import classes from './Profile.modules.css';

function Profile({src, name, linkedin, github}){
	return(
		<div className = {classes.profile}>
			<img src = {src} alt = "" />
			<div className = {classes.profile_info}>
				<h4>{name}</h4>
				<div className = {classes.profile_icons}>
					<SocialIcon url= {linkedin} />
				</div>
				<div className = {classes.profile_icons}>
					<SocialIcon url= {github} />
				</div>
			</div>
		</div>
		)
}
export default Profile