import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import HomePage from './Pages/HomePage'
import MobileDetails from './Pages/MobileDetails'
import Category from './Pages/Category'
import SideHeader from './Component/SideHeader'


function App() {
  return (
    <Router>
    <div className="App">
    
    <SideHeader />

     <Switch>
     <Route exact path="/">
     <HomePage/>
     </Route>
     
     <Route path="/details/:id">
     <MobileDetails/>
     </Route>
     
     <Route path="/category/:id">
     <Category/>
     </Route>
     

     </Switch>
     
    </div>
    </Router>
  );
}

export default App;
