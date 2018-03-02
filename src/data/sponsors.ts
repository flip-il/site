import mtaLogo from '../../public/MTALogo.jpg'
import hamakorLogo from '../../public/Hamakor_logo.png'

type SponsorType =
    'Gold' | 'Silver' | 'Bronze' | 'Partner'

export type Sponsor = {
    name : string,
    logo : any,
    sponsorType : SponsorType
}

export const SponsorsData = [
    {
        name:        'Academic College Tel-Aviv-Yafo',
        logo:        mtaLogo,
        sponsorType: 'Partner'
    },
    {
        name:        'Hamakor',
        logo:        hamakorLogo,
        sponsorType: 'Partner'
    }
]