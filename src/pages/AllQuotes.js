import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = () => {
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

    return (
        <QuoteList quotes={dummyQuotes} />
    )
}

export default AllQuotes;