import mtaLogo from '../../public/MTALogo.jpg'
import hamakorLogo from '../../public/Hamakor_logo.png'

export type SponsorType =
    'Gold' | 'Silver' | 'Bronze' | 'Partner'

export type SponsorData = {
    name : string,
    logo : string,
    link : string,
    sponsorType : SponsorType
}

export const SponsorsData : SponsorData[] = [
    {
        name: 'Academic College Tel-Aviv-Yafo',
        logo: mtaLogo,
        sponsorType: 'Partner',
        link: 'https://www.mta.ac.il/he-il/'
    },
    {
        name: 'Hamakor',
        logo: hamakorLogo,
        sponsorType: 'Partner',
        link: 'https://www.hamakor.org.il/'
    }
]