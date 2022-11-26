import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import React, { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Comments = React.lazy(() => import('../components/comments/Comments'))

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
    const { quoteId } = params;

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return (
            <p className='centered focused'>{error}</p>
        )
    }

    if (status === 'completed' && !loadedQuote) {
        return (
            <div>No quote found</div>
        )
    }

    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={match.path} exact>
                <Link className='centered btn--flat' to={`${match.url}/comments`}>View Comments</Link>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail;