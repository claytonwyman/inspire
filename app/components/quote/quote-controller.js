import QuoteService from "./quote-service.js";

let _quoteService = new QuoteService()

function drawQuote() {
    console.log("QUOTE RETRIEVED:", _quoteService.Quote)

	document.getElementById('quote').innerHTML = `
    	<div class="text-center">
			<p>${_quoteService.Quote.text}</p>
			<p>${_quoteService.Quote.author}</p>
		</div>
    `;
}

export default class QuoteController {

    constructor() {
		_quoteService.addSubscriber('quote', drawQuote)
		_quoteService.getQuote()
	}
}
