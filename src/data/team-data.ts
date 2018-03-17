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
