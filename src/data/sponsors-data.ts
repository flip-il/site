import mtaLogo from '../../public/sponsors/MTALogo.jpg'
import hamakorLogo from '../../public/sponsors/Hamakor_logo.png'
import bigPanda from '../../public/sponsors/BP_Logo.png'

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
    },
    {
        name: 'BigPanda',
        logo: bigPanda,
        sponsorType: 'Silver',
        link: 'https://bigpanda.io/'
    }
]