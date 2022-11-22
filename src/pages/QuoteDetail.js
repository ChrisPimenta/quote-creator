import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    // TODO: Remove after implementing db and fetch
    const dummyQuotes = [
        {
            id: 1,
            author: 'James Franco',
            text: 'Some cool quote.'
        },
        {
            id: 2,
            author: 'Chris Pimenta',
            text: 'Winners never quit and quitters never win.'
        },
    ]

    const quote = dummyQuotes.find(q => q.id === Number(params.quoteId));

    if (!quote) {
        return <p>No quote found.</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
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