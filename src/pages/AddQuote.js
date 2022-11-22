import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from 'react-router-dom';

const AddQuotes = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        history.push('/quotes');
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )
}

export default AddQuotes;