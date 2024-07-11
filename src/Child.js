import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    console.log(" Child Constructor");
    super(props);
  }
  


 //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
 componentWillReceiveProps(nextProps) {
    // props değişiminde çalışır. Değişen propsu parametre olarak alır
    console.log(nextProps);
 }
 
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log(" Child WillMount");
    // Renderdan önce çalışır
  }
  componentDidMount() {
    console.log("Child DidMount");
    // Renderdan sonra çalışır
}
  render() {
    console.log("Child Render");
    return <div>Child</div>;
  }
}
export default Child;
