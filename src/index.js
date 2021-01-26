import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>

      <h2>Jack Bauer</h2>
      <img
        src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        alt="avatar_img"
      />
      <p>+987 654 321</p>
      <p>jack@nowhere.com</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>Artists</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);
