import React from "react";
import ReactDOM from "react-dom";

function Card() {
  return (
    <div>
      <h1>Artists</h1>

      <h2>Beyonce</h2>
      <img
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="avatar_img"
      />
      <p>+123 456 789</p>
      <p>b@beyonce.com</p>

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
  </div>,
  document.getElementById("root")
);
