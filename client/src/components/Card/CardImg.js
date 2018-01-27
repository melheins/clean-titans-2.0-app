import React from 'react';
import "./List.css";

const CardImg = (props) => (

    <img className={"img-thumbnail"} style={{maxHeight:'140px',border:0}} src={require(`../../assets/childavatars/${props.imgSrc}.jpg`)} alt={props.imgSrc}/>

);

export default CardImg;