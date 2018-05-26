import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { possibleStates as EventAnimationStates } from '../state'
import { Speaker } from '../data/speaker-data'

import { classes, style, keyframes, types } from 'typestyle'

function eventAnimationStateToClass(state : EventAnimationStates, shortBio : boolean | undefined) : string {
  const expandKeyframes = keyframes({
    '0%': {maxHeight: '0'},
    '100%': {maxHeight: '75em'}
  })

  const collapseKeyframes = keyframes({
    '100%': {maxHeight: '0em'},
    '0%': {maxHeight: '75em'}
  })

  const baseStyle = {
    fontSize: '0.85em',
    lineHeight: '1.4em',
    cursor: 'pointer'
  }

  type textAlign = types.CSSGlobalValues | 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'match-parent';

  const collapsedClass = style({
    textAlign: 'justify',
    height: '0',
    overflow: 'hidden'
  }, baseStyle)

  const expandingStyle = {
    textAlign: 'justify' as textAlign,
    maxHeight: '0',
    overflow: 'hidden' as types.CSSOverflow,
    animationName: expandKeyframes,
    animationDuration: '0.5s',
    animationTimingFunction: 'cubic-bezier(1,0,1,0)'
  }
  const expandingClass = style(expandingStyle, baseStyle)
  const expandingClassShort = style(expandingStyle, baseStyle, { textAlign: 'center' })

  const expandedClass = style({
    textAlign: 'justify',
    maxHeight: '75em',
    overflow: 'hidden'
  }, baseStyle)
  const expandedClassShort = style({
    textAlign: 'center',
    maxHeight: '75em',
    overflow: 'hidden'
  }, baseStyle)

  const collapsingStyle = {
    textAlign: 'justify' as textAlign,
    maxHeight: '75em',
    overflow: 'hidden' as types.CSSOverflow,
    animationName: collapseKeyframes,
    animationDuration: '0.5s',
    animationTimingFunction: 'cubic-bezier(0,1,0,1)'
  }
  const collapsingClass = style(collapsingStyle, baseStyle)
  const collapsingClassShort = style(collapsingStyle, baseStyle, { textAlign: 'center' })

  switch (state) {
    case 'collapsed':
      return collapsedClass
    case 'expanding':
      return shortBio ? expandingClassShort : expandingClass
    case 'collapsing':
      return shortBio ? collapsingClassShort : collapsingClass
    case 'expanded':
      return shortBio ? expandedClassShort : expandedClass
    default:
      throw 'impossible state'
  }
}

export default function Speaker(speaker : Speaker, widthClass : string, speakerState : EventAnimationStates, index : number) : VNode {
  const speakerNameClass = style({
    margin: '10px 0 0 0',
    cursor: 'pointer'
  })

  const speakerImageClass = style({
    borderRadius: '50%',
    height: '150px',
    boxShadow: '0 0 0 3px #fff, 0 0 0 6px #000, 5px 4px 0 6px #000',
    cursor: 'pointer'
  })

  const speakerClass = style({
    position: 'relative',
    $nest: {
      '&:nth-child(2)::before': {
        content: `'&'`,
        color: '#fff',
        fontFamily: 'Bangers, sans-serif',
        fontSize: '4em',
        textShadow: '4px 4px 0 #000, -1px -1px 0 black, 0 -1px 0 black, -1px 0 0 black',
        top: '35px',
        position: 'absolute',
        left: '-35px'
      },
      [`&:hover .${speakerNameClass}`]: {
        color: 'moccasin'
      },
      [`&:hover .${speakerImageClass}`]: {
        boxShadow: '0 0 0 3px moccasin, 0 0 0 6px #000, 5px 4px 0 6px #000'
      }
    }
  })

  return (
    <div className={classes('speaker', widthClass, speakerClass)} data-speakerindex={index.toString()}>
      <img className={speakerImageClass} src={speaker.portrait}/>
      <p className={speakerNameClass}>{speaker.name}</p>
      <p className={eventAnimationStateToClass(speakerState, speaker.shortBio)}>{speaker.bio}</p>
    </div>
  )
}
