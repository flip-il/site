import mtaLogo from '../../public/MTALogo.jpg'
import hamakorLogo from '../../public/Hamakor_logo.png'

type SponsorType =
    'Gold' | 'Silver' | 'Bronze' | 'Partner'

export type Sponsor = {
    name : string,
    logo : string,
    link : string,
    sponsorType : SponsorType
}

export const SponsorsData = [
    {
        name:        'Academic College Tel-Aviv-Yafo',
        logo:        mtaLogo,
        sponsorType: 'Partner',
        link:        'https://www.mta.ac.il/he-il/'
    },
    {
        name:        'Hamakor',
        logo:        hamakorLogo,
        sponsorType: 'Partner',
        link:        'https://www.hamakor.org.il/'
    }
]