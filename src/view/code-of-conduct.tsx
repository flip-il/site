import { VNode } from '@cycle/dom'

import { style } from 'typestyle'

const container = style({textAlign: 'center'})

export default function codeOfConduct() : VNode {
  return (
    <div>
      <h1>Code of Conduct:</h1>
      <div className={container}>
        We will probably have a link to some sort of document asking everyone to play nice.
      </div>
    </div>
  )
}
