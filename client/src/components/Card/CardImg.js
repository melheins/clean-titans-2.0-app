import React from 'react';

//import apprImg from '../../assets/childavatars/supergirl.jpg'


const CardImg = (props) => (

    <img className={"img-thumbnail"}  src={require(`../../assets/childavatars/${props.imgSrc}.jpg`)} alt={props.imgSrc}/>

);

export default CardImg;