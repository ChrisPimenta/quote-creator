import { useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();

    // Get Highlighted quote from list using params
    console.log(params);

    return (
        <>
            <HighlightedQuote />
            <Comments />
        </>
    )
}

export default QuoteDetail;