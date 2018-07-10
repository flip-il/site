export type TicketsData = TicketData[]

export type TicketData = {
    type : 'early-bird' | 'regular' | 'discount' | 'last-minute'
    title : string,
    priceILS : number,
    purchaseLink : string,
    comment : string,
    shouldDisplay : boolean,
    available : boolean
}

export const ticketsList : TicketsData =
    [
        {
            type: 'early-bird',
            title: 'Early Bird Tickets - Sold out!',
            priceILS: 120,
            purchaseLink: 'https://ti.to/hamakor/functional-programming/with/9jjirt8btxk',
            comment: 'Early Bird Tickets Sale is Closed',
            shouldDisplay: true,
            available: false
        },
        {
            type: 'regular',
            title: 'FLIP Conference Tickets',
            priceILS: 200,
            purchaseLink: 'https://ti.to/hamakor/functional-programming/with/9jfikm3t-tg',
            comment: 'Sale starts on May 21st; Available until July 9th, 23:00 IST',
            shouldDisplay: true,
            available: true
        },
        {
            type: 'discount',
            title: 'Students / Service Personnel / Minors Discount Tickets',
            priceILS: 40,
            purchaseLink: 'https://ti.to/hamakor/functional-programming/with/guogpn72ooi',
            comment: 'Sold Out!\nAvailable to students, soldiers in mandatory service, people under 18 or people in voluntary ' +
            'service (Shnat Sherut) who pay for themselves. Ticket is only valid after confirmation of status.',
            shouldDisplay: true,
            available: false
        },
        {
            type: 'last-minute',
            title: 'Last Minute Tickets are Available!',
            priceILS: 250,
            purchaseLink: 'https://ti.to/hamakor/functional-programming/with/uhmcuk608pq',
            comment: 'Missed the purchase? There are still some tickets left!',
            shouldDisplay: false,
            available: false
        }
    ]