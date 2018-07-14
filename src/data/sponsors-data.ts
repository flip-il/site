import mtaLogo from '../../public/sponsors/MTALogo.jpg'
import hamakorLogo from '../../public/sponsors/Hamakor_logo.png'
import bigPanda from '../../public/sponsors/BP_Logo.png'
import cycognito from '../../public/sponsors/CYC_logo_white.png'
import sqream from '../../public/sponsors/sqream+technologies.png'
import akamai from '../../public/sponsors/akamai_logo.png'
import zenProtocol from '../../public/sponsors/zen_protocol_white.png'
import manning from '../../public/sponsors/Manninglogo_outline.png'

export type SponsorType =
    'Gold' | 'Silver' | 'Bronze' | 'Partner' | 'Prize'

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
  },
  {
    name: 'CyCognito',
    logo: cycognito,
    sponsorType: 'Bronze',
    link: 'https://www.cycognito.com/'
  },
  {
    name: 'SQream',
    logo: sqream,
    sponsorType: 'Bronze',
    link: 'https://sqream.com/'
  },
  {
    name: 'Akamai',
    logo: akamai,
    sponsorType: 'Silver',
    link: 'https://www.akamai.com'
  },
  {
    name: 'Zen Protocol',
    logo: zenProtocol,
    sponsorType: 'Silver',
    link: 'https://www.zenprotocol.com/'
  },
  {
    name: 'Manning Publications',
    logo: manning,
    sponsorType: 'Prize',
    link: 'https://www.manning.com/'
  }
]