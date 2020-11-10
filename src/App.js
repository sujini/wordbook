import React, {useEffect} from 'react';
import  {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from './logo.svg';

import Header from './components/header/header.component';
import HomePageContainer from './pages/homepage/homepage.container';
import WordPageContainer from './pages/word/word.container';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import SignUp from './components/sign-up/sign-up.component';



import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';

import {checkUserSession} from  './redux/user/user.actions';
import './App.css';

const App = function({checkUserSession,currentUser}) {

  useEffect( ()=>{
    checkUserSession();
     

  },[checkUserSession]);
 
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePageContainer}/>
        <Route exact path='/wordbook' component={HomePageContainer}/>
        <Route path='/word' component={WordPageContainer}/>
        
        <Route exact path='/signin' render={() => currentUser?(<Redirect to='/'/>):(<SignInAndSignUp/>)}/>
        <Route exact path='/signup' render={() => currentUser?(<Redirect to='/'/>):(<SignUp/>)}/>
        
      </Switch>
    </div>
  );
}
const mapDispatchToProps = dispatch =>({
  checkUserSession:()=>dispatch(checkUserSession())
});
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
