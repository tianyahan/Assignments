import React,{Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css'

class App extends Component{
  state = {
    Person:
      [{userName:"aya",company:'tcs'},
      {userName:"Elimar",company:'123'},
      {userName:"SYB",company:'Uni'}]
  }
  swithchUserHandle=(newName)=>{
    this.setState({
      Person:
        [{userName:"aya",company:'123tcs'},
        {userName:newName,company:'123tcs'},
        {userName:"SYB",company:'Uni'}]
    })
  }
  changeNameHandle=(event)=>{
      this.setState(
        {
          Person:
                [{userName:event.target.value,company:'123tcs'},
                {userName:"Elimar",company:'123tcs'},
                {userName:"SYB",company:'Uni'}]
        }
      )
  }
  render(){
     const btnStyle= {
       display:'block',
       border:'1px solid white',
       margin:' 10px auto',
       
     }
    return(
      <div className='App' 
      >
         <button 
            onClick={this.swithchUserHandle.bind(this,'Kelvin')}
            style={btnStyle}
         >change user</button>

         <UserInput 
            changed={this.changeNameHandle}/>
         <UserOutput 
            name={this.state.Person[0].userName}
            company={this.state.Person[0].company}
          
            />
         <UserOutput 
            name={this.state.Person[1].userName}
            company={this.state.Person[1].company}
         />
         <UserOutput 
            name={this.state.Person[2].userName}
            company={this.state.Person[2].company}/>
      </div>
    )
  }  
}

export default App;