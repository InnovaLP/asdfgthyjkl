const scrapeIt = require("scrape-it");

const scrapeItExample = () => {
    const scrapeResult = await scrapeIt('https://slides.com/carboleda', {
        presentations: {
            listItem: 'li.deck.public',
            data: {
                title: 'span.deck-title-value',
                description: 'span.deck-description-value',
                link: {
                    selector: 'a.deck-link',
                    attr: 'href'
                }
            }
        }
    });
    console.log(scrapeResult);
}
export default scrapeItExample;