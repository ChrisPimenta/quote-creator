import { Route, Redirect, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import AddQuotes from './pages/AddQuote';
import QuoteDetail from './pages/QuoteDetail';
import classes from './components/layout/Layout.module.css';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'></Redirect>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:id'>
            <QuoteDetail />
          </Route>
          <Route path='/add-quote'>
            <AddQuotes />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
