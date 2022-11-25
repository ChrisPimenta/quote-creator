import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Create Seperate code chunk
const AddQuote = React.lazy(() => import('./pages/AddQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className='centered'>
              <LoadingSpinner />
            </div>
          }>
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
              <AddQuote />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
