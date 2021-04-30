import {BrowserRouter , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import Users from './components/Users'
import CourierForm from './components/forms/CourierForm'
import Orders from './components/Orders'
import OrderForm from './components/forms/OrderForm'



function App() {


  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component = {Homepage} />
          <Route exact path='/about' component = {About} />
          <Route exact path='/users' component = {Users} />
          <Route exact path='/users/add' component = {CourierForm}/>
          <Route exact path='/orders' component = {Orders}/>
          <Route exact path='/orders/add' component = {OrderForm}/>


        </div>
      </BrowserRouter>
    </>


  );
}

export default App;
