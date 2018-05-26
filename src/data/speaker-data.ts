import { Person } from './person'

export type Speaker = Person

import speakerMcSpeakerface from '../../public/speakers/speaker_mcspeakerface.jpg'
import itamarRavid from '../../public/speakers/itamar_ravid.jpg'
import dvirFaivel from '../../public/speakers/dvir_faivel.png'
import yaronWittenstein from '../../public/speakers/yaron.jpg'
import michaelSnoyman from '../../public/speakers/snoyman.jpg'
import drYallop from '../../public/speakers/yallop.png'
import danielSchmulewicz from '../../public/speakers/daniel_sch.jpg'
import aviAvni from '../../public/speakers/avi_avni.png'
import sharonShmorak from '../../public/speakers/sharon_shmorak.jpg'
import amitaiBurstein from '../../public/speakers/amitai_burstein.jpg'
import borisFarber from '../../public/speakers/bfarber-2 BW.jpg'
import zviAvraham from '../../public/speakers/zvi_photo.png'
import noamTenne from '../../public/speakers/noam_tenne.jpg'
import adiPolak from '../../public/team/adi.jpg'
import gilMizrahi from '../../public/speakers/gil_mizrahi.png'
import hilaNoga from '../../public/speakers/Hila BW.jpg'

export const SpeakerList : Speaker[] = [
  {
    portrait: drYallop,
    name: 'Dr. Jeremy Yallop',
    bio: 'This is where some bio information would go',
    linkedInUrl: ''
  },
  {
    portrait: dvirFaivel,
    name: 'Dvir Faivel',
    shortBio: true,
    bio: 'Interested in Scala, functional programming, big data, parallel and distributed programming, and more geeky stuff',
    linkedInUrl: ''
  },
  {
    portrait: yaronWittenstein,
    name: 'Yaron Wittenstein',
    bio: 'Creating software is my passion, my most loved programming languages are Ruby and Elixir and I only code in vim :)',
    linkedInUrl: ''
  },
  {
    portrait: michaelSnoyman,
    name: 'Michael Snoyman',
    bio: 'Michael Snoyman is the founder and lead developer of multiple Haskell open source projects, including Yesod, Conduit, Stack, and Stackage. His main interests are creating developer-friendly, high performance libraries that minimize bugs. Michael is VP of Engineering at FP Complete, where he focuses on using Haskell and modern devops to help projects make it to market faster and with fewer bugs.',
    linkedInUrl: ''
  },
  {
    portrait: danielSchmulewicz,
    name: 'Daniel Szmulewicz',
    shortBio: true,
    bio: 'Software craftsman / Entrepreneur / Founder of the Clojure user group in Israel',
    linkedInUrl: 'https://www.linkedin.com/in/danielszmulewicz/'
  },
  {
    portrait: itamarRavid,
    name: 'Itamar Ravid',
    bio: 'Itamar is a freelance software engineer. He’s been working with all facets of software development for over a decade - from data infrastructure, through CI/CD processes to backend development. His current interests include microservice architectures and stream processing systems on the JVM. Itamar is a functional programming addict and contributes to several open-source projects in the Scala ecosystem, such as the Cats library and ENSIME.',
    linkedInUrl: ''
  },
  {
    portrait: aviAvni,
    name: 'Avi Avni',
    bio: 'Avi Avni is a Consultant and Instructor at SELA Group, With 7+ years of industry experience. Avi specializes in design and development of large scale applications and diagnosing memory and CPU performance issues. Avi has 2+ years experience as a team leader. Avi is a contributor to several open source projects like F# Compiler, CoreCLR, Roslyn, ClrMD. Avi is also a Neo4j Certified Professional.',
    linkedInUrl: 'https://www.linkedin.com/in/avi-avni/'
  },
  {
    portrait: sharonShmorak,
    name: 'Sharon Shmorak',
    bio: 'Sharon is  a senior Java back-end developer with 20 years of experience writing imperative/OOP code and a functional programmer in the making. Sharon is currently learning Scala, Haskell, Category theory and Lambda calculus. She blogs about the process of learning functional programming on Medium.',
    linkedInUrl: 'https://www.linkedin.com/in/sharon-shmorak-dafner-14a18438/'
  },
  {
    portrait: speakerMcSpeakerface,
    name: 'Ilya Sher',
    bio: 'Systems and software engineer, professionally since 2001. Frustrated by the void, working on NGS, a domain specific language and a shell for systems engineering tasks.',
    linkedInUrl: 'https://www.linkedin.com/in/ilyasher'
  },
  {
    portrait: amitaiBurstein,
    name: 'Amitai Burstein',
    bio: 'CTO of Gizra, a web development shop building sites for Harvard university, UN, EC and more. Amitai is a Drupal core developer running Elm on production.',
    linkedInUrl: 'https://www.linkedin.com/in/amitai-burstein-9b052a2b/'
  },
  {
    portrait: borisFarber,
    name: 'Boris Farber',
    bio: 'Boris is an Engineer focusing on Android optimizations with tooling. His technical interests include Android, Kotlin and Java I/O. Boris has broad experience in software development, customer facing and professional services, and currently works at Google as a Senior Partner Engineer.  In addition Boris leads ClassyShark and AS Poet, two popular open source apps to optimize Android app size and build.',
    linkedInUrl: 'https://www.linkedin.com/in/borisfarber/'
  },
  {
    portrait: zviAvraham,
    name: 'Zvi Avraham',
    bio: 'Zvi came in touch with Erlang in 1998 and started using it professionally in 2007. He specialises in Distributed Systems, including various Crypto-related technologies, such as Blockchains and Smart Contracts. His current go to web stack is Elm + TypeScript on the front-end and Elixir/Phoenix on the backend. He currently works as a CTO at Nivertech.',
    linkedInUrl: 'https://www.linkedin.com/in/zviav/'
  },
  {
    portrait: noamTenne,
    name: 'Noam Tenne',
    bio: 'A hacker-hearted and disciplined software developer. Has been working on both cloud based and on-premise platforms, gaining much experience in building scalable, mission critical web applications and microservices. Now wreaking havoc at Healthy.io',
    linkedInUrl: 'www.10ne.org'
  },
  {
    portrait: adiPolak,
    name: 'Adi Polak',
    bio: '',
    linkedInUrl: ''
  },
  {
    portrait: speakerMcSpeakerface,
    name: 'Ziv Perry',
    bio: '',
    linkedInUrl: 'https://www.linkedin.com/in/zivperry/'
  },
  {
    portrait: gilMizrahi,
    name: 'Gil Mizrahi',
    shortBio: true,
    bio: 'A Haskell developer by day and night, I enjoy implementing interesting applications in purely functional style.',
    linkedInUrl: 'https://gilmi.me'
  },
  {
    portrait: hilaNoga,
    name: 'Hila Noga',
    bio: 'Hila has 14 years of experience building software, training software builders, and managing teams that build software. Up until recently, she was the CTO of Hello Heart, where she fell in love with functional programming while building the company\'s back end using Scala. These days she is flying under the radar and working on her own project.',
    linkedInUrl: 'https://www.linkedin.com/in/hilanoga/'
  }
]

type SpeakerDictionary = {[name : string] : Speaker}

// Export a dictionary of speakers indexed by their lowercase name
export const Speakers : SpeakerDictionary =
  SpeakerList.reduce<SpeakerDictionary>((speakers : SpeakerDictionary, speaker : Speaker) => {
    speakers[speaker.name.toLowerCase()] = speaker
    return speakers
  }, {})
