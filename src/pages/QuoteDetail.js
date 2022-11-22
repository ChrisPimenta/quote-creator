import { useParams, Route, Link } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();

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
            <Route path='/quotes/:quoteId' exact>
                <Link className='centered btn--flat' to={`/quotes/${params.quoteId}/comments`}>View Comments</Link>
            </Route>
            <Route path='/quotes/:quoteId/comments'>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail;