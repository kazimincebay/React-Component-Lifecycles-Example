import "./App.css";
import {Component} from "react";
//import Child from "./Child";
class App extends Component{
//   constructor(props) {
//     console.log("Constructor");
//     super(props);
//     this.state = {
//       favoritecolor: "red"
//     };
//   }
//   //WARNING! To be deprecated in React v17. Use componentDidMount instead.
//   componentWillMount() {
//     console.log("WillMount");
    
//   }
//   componentDidMount() { console.log("DidMount") }
//   onClick=()=>{
// this.setState({
// favoritecolor:"green"
// });
state={
  tl:0
};
  change=(e)=>{
    this.setState({
      tl:e.target.value
    });
  };

shouldComponentUpdate(nextProps, nextState) { console.log("shouldComponentUpdate",nextProps,nextState)
  return (nextState.tl % 5) === 0;

  // nextprops propertyiyi yazdırır
  // nextstate ise true ya da false döner true ise componenti render eder eğer false ise componenti render etmez 
 }

    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
      //shouldComponentUpdate true olursa çalışır
      // renderdan önce çalışır
      console.log("componentWillUpdate",nextProps,nextState)
    }

    componentDidUpdate(prevProps, prevState) { console.log("componentDidUpdate",prevProps,prevState)
      //shouldComponentUpdate true olursa çalışır
      // renderdan sonra çalışır
    } 
  
   render() {
    console.log("Render Çalıştı");
    return (
      <div className="App">
        {/* <h1>My favorite color {this.state.favoritecolor}</h1>
        <Child renk={this.state.favoritecolor}/>
        <button onClick={this.onClick}>Change Color</button> */}



          <input name="tl" id="tl" onChange={this.change}/><br/><br/>
          Her Portakal 5 ₺

          <br/>
          {this.state.tl / 5 } tane portakal alabilirsin

      </div>
    );
  }
}

export default App;
