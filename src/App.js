import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Account from './components/Account/Account';
import Signup from './components/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivetUnRegisterUser from './components/PrivetRouts/PrivetUnRegisterUser';
import PrivetRegisterUser from './components/PrivetRouts/PrivetRegisterUser';
import Blog from './components/Blog/Blog';
import ServicesDetails from './components/Home/ServicesDetails';
import NotFound from './components/NotFound/NotFound';
import Appoint from './components/Appoint/Appoint';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/blogs">
          <Blog></Blog>
        </Route>
        <PrivetUnRegisterUser exact path="/service/details/:serviceID">
          <ServicesDetails></ServicesDetails>
        </PrivetUnRegisterUser>
        <PrivetUnRegisterUser path="/appointment">
          <Appoint></Appoint>
        </PrivetUnRegisterUser>
        <PrivetRegisterUser path="/login">
          <Login></Login>
        </PrivetRegisterUser>
        <PrivetRegisterUser path="/signup">
          <Signup></Signup>
        </PrivetRegisterUser>
        <PrivetUnRegisterUser path="/account">
          <Account></Account>
        </PrivetUnRegisterUser>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
