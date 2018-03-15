import { Person } from './person'

export type TeamMember = Person

import memberMcMemberface from '../../public/team/member_mcmemberface.jpg'
import yoav from '../../public/team/yoav.png'
import yardena from '../../public/team/yardena.jpeg'

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
        portrait: memberMcMemberface,
        name: 'Guy Rozen',
        bio: ''
    },
    {
        portrait: yardena,
        name: 'Yardena Meiman',
        bio: ''
    },
    {
        portrait: memberMcMemberface,
        name: 'Gadi Aharoni',
        bio: ''
    },
    {
        portrait: memberMcMemberface,
        name: 'Adi Polak',
        bio: ''
    },
    {
        portrait: memberMcMemberface,
        name: 'Shani Margulis',
        bio: ''
    },
    {
        portrait: memberMcMemberface,
        name: 'Netta Bondi',
        bio: ''
    },
    {
        portrait: memberMcMemberface,
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
