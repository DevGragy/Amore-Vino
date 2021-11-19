import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home'
import { Footer, Navbar } from './components'
import Accesorios from './pages/Accesorios/Accesorios';
import Especiales from './pages/Especiales/Especiales';
import Blog from './pages/Blog/Blog';
import Club from './pages/Club/Club';
import Destilados from './pages/Destilados/Destilados';
import Gourmet from './pages/Gourmet/Gourmet';
import Ofertas from './pages/Ofertas/Ofertas'
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Tienda from './pages/Tienda/Tienda';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/especiales' component={Especiales}/>
        <Route path='/club' component={Club}/>
        <Route path='/destilados' component={Destilados}/>
        <Route path='/gourmet' component={Gourmet}/>
        <Route path='/accesorios' component={Accesorios}/>
        <Route path='/ofertas' component={Ofertas}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/tienda' component={Tienda}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;