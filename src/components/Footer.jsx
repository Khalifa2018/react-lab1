import { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = { name: "Movie" };
  }
  render() {
    return (
      <>
        <br />
        <hr />
        <h3>{this.state.name} Footer</h3>
      </>
    );
  }
}

export default Footer;
