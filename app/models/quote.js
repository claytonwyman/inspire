export default class Quote {
    constructor(data) {
        console.log('[RAW QUOTE API DATA]', data);

        this.date = data.qotd_date
        this.author = data.quote.author
        this.text = data.quote.body

        // Contains the most important elements of the quote
    }
}