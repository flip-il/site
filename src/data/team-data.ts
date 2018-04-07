import { Person } from './person'

export type TeamMember = Person

import memberMcMemberface from '../../public/team/member_mcmemberface.jpg'
import yoav from '../../public/team/yoav.png'
import yardena from '../../public/team/yardena.jpg'
import guy from '../../public/team/guy.jpg'
import adi from '../../public/team/adi.jpg'
import gadi from '../../public/team/gadi.jpg'
import netta from '../../public/team/netta.jpg'
import noga from '../../public/team/noga.jpg'
import shani from '../../public/team/shani.jpg'

export const TeamListUnshuffled : TeamMember[] = [
    {
        portrait: yoav,
        name: 'Yoav Luft',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/yoav-luft-28751418/'
    },
    {
        portrait: memberMcMemberface,
        name: 'Daniel Khankin',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/daniel-khankin-6b2589108/'
    },
    {
        portrait: guy,
        name: 'Guy Rozen',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/guy-rozen/'
    },
    {
        portrait: yardena,
        name: 'Yardena Meiman',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/ymeymann/'
    },
    {
        portrait: gadi,
        name: 'Gadi Aharoni',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/gadi-aharoni-1bb45/'
    },
    {
        portrait: adi,
        name: 'Adi Polak',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/adi-polak-68548365/'
    },
    {
        portrait: shani,
        name: 'Shani Margulis',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/shani-margulis-9b369882/'
    },
    {
        portrait: netta,
        name: 'Netta Bondi',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/netta-b-7b6a2148/'
    },
    {
        portrait: noga,
        name: 'Noga Rotman',
        bio: '',
        linkedInUrl: 'https://www.linkedin.com/in/noga-h-rotman/'
    }
]

const shuffledList = TeamListUnshuffled
for (let i = shuffledList.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [shuffledList[i - 1], shuffledList[j]] = [shuffledList[j], shuffledList[i - 1]]
}

export default shuffledList
