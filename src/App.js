import React from 'react'; 
import Login from './components/Login'
import Order from './components/Order'
import Summary from './components/Summary'
import logo from './burger-logo.png';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      patty:'beef',
      amount: '',
      doneness: '',
      topping: '',
      cheese: '',
      bun: '',
      sauce: '',
      extra: '',
      isLoggedIn: false, 
      orderCompleted: false //****** */
    };
    this.userCheck = this.userCheck.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setInput = this.setInput.bind(this);
    this.setOrder = this.setOrder.bind(this); //**** */
  }

  userCheck() {
    if(this.state.username === 'abc' && this.state.password === "123"){
      this.setState({
        isLoggedIn: true
      })
    } else {
      alert('Username or password does not match')
    }
  }
  // *************
  setOrder() {
      this.setState({ orderCompleted: true })
  }
// *****************
setUserName(UserName) {
  this.setState({
    username: UserName
  })
}

setPassword(UserPassword) {
  this.setState({
    password: UserPassword
  })
}

setInput(property, value) {
this.setState({
  [property]: value
})
}

  render(){
    let currComponent = <div></div>
    if(this.state.isLoggedIn){
      currComponent = <Order inputFunction={this.setInput} orderCompleted={this.setOrder}/>
      
    } else {
      currComponent = <Login userName={this.setUserName} userPassword={this.setPassword} checkUser={this.userCheck}/>
    }
    // ************
    if(this.state.orderCompleted && this.state.isLoggedIn){
      currComponent = <Summary order = {this.state}/>
    }

          // *****************
    return (
      <div className="App">
        <img src={logo} alt="Delicious Burger" id="logo" />
        <hr></hr>
        {currComponent}
        {console.log('Is order completed?:'+this.state.orderCompleted)}
        {console.log('Is logged in?: '+this.state.isLoggedIn)}
        </div>
    );
  }

}

export default App;
