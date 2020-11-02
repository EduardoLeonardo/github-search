import React from "react";
import Avatar from "../avatar/Avatar";
import "./Card.css";

const Card = ({ avatar_url: avatar, login: name, html_url: perfil }) => {
  return (
    <div className="card">
      <a href={perfil} target="_blank">
        <Avatar src={avatar} width={100} style={{ borderRadius: 10 }} tar />
      </a>
      <h4>{name}</h4>
    </div>
  );
};

export default Card;
