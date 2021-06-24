// nav routes now!!
// make a route for each page

// for routes
// route componenet is to render some UI when its path matches the current URL

import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/NavBar';
import Workers from './components/workers/Workers';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
  <NavBar />
  <Container>
  <Switch>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} /> 
    <Route exact path="/workers" component={Workers} /> 

    {/* make sure this is the last item */}
    <Route component={NoMatch} />
    </Switch>
    </Container>
  </>
)

export default App;
