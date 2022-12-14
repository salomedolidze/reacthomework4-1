import './App.css';
import { Component } from "react";

// დავალება 1
const generateUsers = () => {
  let users = ["user1","user2"," user3"," user4"," user5"," user6"," user7"," user8"," user9"," user10",
  ];
  return users;
};


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      showUsersList: false,
    };
  }

  componentDidMount() {
    const userFromBe = generateUsers();
    this.setState({
      user: userFromBe,
    });
    console.log("componentDidMount");
  }

  // shouldComponentUpdate(nextprops, nextstate) {
  //   if (!nextstate.showUsersList) {
  //     return false;
  //   }
  //   return true;
  // }

  componentDidUpdate(prevpops, prevstate) {
    if (prevstate.user !== this.state.user) {
      document.title = `${this.state.user.length} users left`;
    }
  }
  buttonClickHendler = () => {
    const randomList =  this.state.user[Math.floor(Math.random() * this.state.user.length)];
    
    const randomUser = this.state.user.filter((element) => {
      return element !== randomList;
    });
    this.setState({
      user: randomUser,
    });
  };



  render() {
    return (
      <div> 
        <button onClick={this.buttonClickHendler}> click here</button>
        <button onClick={()=>{this.setState({showUsersList:!this.state.showUsersList})}}>{this.state.showUsersList ? "hide" : "show"} users</button>
       {this.state.showUsersList &&  <RenderUser userlist={this.state.user}/>}

      </div>
    );
  }
}

const RenderUser=({userlist})=>{
  return (<div>
    {userlist.map((item, index) => {
              return <h1 key={index}>{item}</h1>;})}
      </div>)
}



