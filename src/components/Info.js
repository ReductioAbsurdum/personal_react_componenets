import React from 'react';

class Info extends React.Component{
  render(){
    return (
      <div className="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor quam a sapien dapibus tempor. Quisque vel vestibulum ligula. Sed pretium purus ut mi congue, vel ornare magna bibendum. Aenean efficitur tincidunt odio feugiat tristique. Curabitur libero urna, tempor et tortor ut, viverra finibus purus. In sit amet nisi sed ex congue feugiat eu vitae ipsum.</p>
        <p>Aliquam risus ex, porta a euismod vel, consectetur in nibh. Sed tellus leo, venenatis et nulla in, pretium aliquet ante. Phasellus porta imperdiet justo quis blandit. Mauris sapien nulla, lobortis non sagittis eu, lacinia vel neque.</p>
        <p>Morbi suscipit iaculis turpis, vitae ornare purus posuere ut. Mauris elit erat, tempor eget velit eget, euismod mollis nisl.</p>
        <p>Price: $259.95  **Free Shipping**</p>
        <hr />
        <button type="button" name="button" onClick={this.props.changeSection}>Order Now</button>
    </div>
    )
  }
}

export default Info;
