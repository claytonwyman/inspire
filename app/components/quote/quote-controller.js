import QuoteService from "./quote-service.js";

let _quoteService = new QuoteService()

function drawQuote() {
    console.log("QUOTE RETRIEVED:", _quoteService.Quote)

}

export default class QuoteController {

    constructor() {
		_quoteService.addSubscriber('quote', drawQuote)
		_quoteService.getQuote()
	}
}
