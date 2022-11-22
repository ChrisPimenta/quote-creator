import { Route, Redirect, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import AddQuotes from './pages/AddQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'></Redirect>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/add-quote'>
            <AddQuotes />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
