import React, { Component } from 'react';
import {  Form, Button, Divider, Message } from 'semantic-ui-react';
import fire from '../../config/Fire';


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };


}

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (

      <div>
    <Message
      attached
      header='Bienvenue Chez SOS APERO49!'
      content='Connectez-vous Par ici!'
    />
    <Form className='attached fluid segment'>
    <Form.Input value={this.state.email} onChange={this.handleChange} label='Email' placeholder='Votre email' type='email' id='email' />
      <Form.Input value={this.state.password} onChange={this.handleChange} label='Password' type='password' placeholder='Je ne regarde jamais le mot de passe ' id='password'/>
      <Form.Checkbox inline label='Se rappeler de moi' />
      <Button onClick={this.login} secondary fluid>Se connecter</Button>
      <Divider horizontal>Ou</Divider>
      <Button onClick={this.signup} primary fluid>S'enregistrer</Button>
      </Form>
    </div>
    );
  }
}
export default Login;