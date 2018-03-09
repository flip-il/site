import { Person } from './person'

export type TeamMember = Person

import memberMcMemberface from '../../public/team/member_mcmemberface.jpg'
import yoav from '../../public/team/yoav.png'

export const TeamListUnshuffled : TeamMember[] = [
  {
    portrait: memberMcMemberface,
    name: 'Member McMemberface',
    bio: 'Member is very afraid that he will some day be dismembered. He keeps himself distracted by organizing conferences.'
  },
    {
      portrait: yoav,
        name: 'Yoav Luft',
        bio: 'Monadial Person'
    }
]

const shuffledList = TeamListUnshuffled
for (let i = shuffledList.length; i; i--) {
  const j = Math.floor(Math.random() * i);
  [shuffledList[i - 1], shuffledList[j]] = [shuffledList[j], shuffledList[i - 1]]
}

export default shuffledList
