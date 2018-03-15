import { Person } from './person'

export type TeamMember = Person

import memberMcMemberface from '../../public/team/member_mcmemberface.jpg'
import yoav from '../../public/team/yoav.png'
import yardena from '../../public/team/yardena.jpeg'
import guy from '../../public/team/guy.jpeg'
import adi from '../../public/team/adi.jpeg'
import gadi from '../../public/team/gadi.jpeg'
import netta from '../../public/team/netta.jpeg'
import noga from '../../public/team/noga.jpeg'
import shani from '../../public/team/shani.jpeg'

export const TeamListUnshuffled : TeamMember[] = [
    {
        portrait: yoav,
        name: 'Yoav Luft',
        bio: 'Monadial Person'
    },
    {
        portrait: memberMcMemberface,
        name: 'Daniel Khankin',
        bio: ''
    },
    {
        portrait: guy,
        name: 'Guy Rozen',
        bio: ''
    },
    {
        portrait: yardena,
        name: 'Yardena Meiman',
        bio: ''
    },
    {
        portrait: gadi,
        name: 'Gadi Aharoni',
        bio: ''
    },
    {
        portrait: adi,
        name: 'Adi Polak',
        bio: ''
    },
    {
        portrait: shani,
        name: 'Shani Margulis',
        bio: ''
    },
    {
        portrait: netta,
        name: 'Netta Bondi',
        bio: ''
    },
    {
        portrait: noga,
        name: 'Noga Rotman',
        bio: ''
    }
]

const shuffledList = TeamListUnshuffled
for (let i = shuffledList.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [shuffledList[i - 1], shuffledList[j]] = [shuffledList[j], shuffledList[i - 1]]
}

export default shuffledList
