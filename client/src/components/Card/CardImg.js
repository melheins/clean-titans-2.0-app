import React from 'react';
import "./List.css";

const CardImg = (props) => (

    <img className={"img-thumbnail"} style={{height:'150px'}} src={require(`../../assets/childavatars/${props.imgSrc}.jpg`)} alt={props.imgSrc}/>

);

export default CardImg;