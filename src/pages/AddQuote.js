import QuoteForm from "../components/quotes/QuoteForm";

const AddQuotes = () => {
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )
}

export default AddQuotes;