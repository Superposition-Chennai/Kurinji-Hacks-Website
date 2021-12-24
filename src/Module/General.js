// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import echo3D from "./Assets/sponsorsLogos/echo3D.png";
import codingblocks from "./Assets/sponsorsLogos/codin blocks.png";
import raahee from "./Assets/sponsorsLogos/Raahee.png";
import voiceflow from "./Assets/sponsorsLogos/voiceflow.png";
import wolfram from "./Assets/sponsorsLogos/wolfram.png";
import xyz from "./Assets/sponsorsLogos/xyz.png";
import balsamiq from "./Assets/sponsorsLogos/balsamiq.png";
import slingshot from "./Assets/sponsorsLogos/slingshot.png";
import interviewcake from "./Assets/sponsorsLogos/interview-cake.png";
import framer from "./Assets/sponsorsLogos/framer.png";
import gfg from "./Assets/sponsorsLogos/gfg.png";
import onep from "./Assets/sponsorsLogos/1Password.png";
import axure from "./Assets/sponsorsLogos/axure.png";
import certopus from "./Assets/sponsorsLogos/certopus.svg";
import ll from "./Assets/sponsorsLogos/ll.png";
import hackplus from "./Assets/sponsorsLogos/hackplus.svg";
import hackclub from "./Assets/sponsorsLogos/hackclub.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import logo from "./Assets/logo new 1.png";

const TOP_SECTION = {
  TITLE: "Kurinji Hacks",
  Typed_effect: ["48 hours of creation", "Win awesome prizes", "Learn new skills", "Meet amazing people"],
  SHORT_DESCRIPTION:
    "The official hackathon of Superposition Chennai for women and non-binary folks across the globe filled with creation, innovation, & fun.",
  IMG_SRC: logo,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.gle/PPccbUemh85N46xw8",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.gle/ZqArTs49RKK7f5rG6"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/superpositionchennai/",
  discord: "https://discord.com/invite/GVFs3kSbsF/",
  linkedin: "https://www.linkedin.com/company/superposition-chennai/",
  twitter: "https://twitter.com/SuperPosChennai",
  devpost: "https://kurinji-hacks.devpost.com/",
  email: "mailto:ch.chennai@superposition.tech",
  mail: "ch.chennai@superposition.tech"
};

const MIDDLE_SECTION = {
  TITLE: "What is Kurinji Hacks?",
  LONG_DESCRIPTION:
    "Kurinji Hacks is a hackathon aimed at high school and college girls and non-binary folks of all experience levels and backgrounds. It is organized by Superposition Chennai. Our team is passionate about offering attendees a safe, welcoming, and supportive environment to experiment with technology. Not only do we wish to promote creativity in the projects that the attendees will create, we also wish that the girls will be able to learn and have fun. Additionally, we want to generate a larger interest and help more girls and non-binary folks learn and thrive in technology related fields. This event is free and is organized digitally.",
  LOGO_EFFECT: true,
  LOGO: "./Assets/Kurinji-Hacks logo.png"
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.gle/PPccbUemh85N46xw8"
  },
  JOIN_TEAM: {
    required: false,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="sixth fas fa-3x fa-trophy"></i>,
      type: "Best Overall Hack (10)",
      content:
        "Each team member of the top 10 teams will win a year of Wolfram | One Personal Edition plus a one-year subscription to Wolfram | Alpha Pro."
    },
    {
      icon: <i class=" third fas fa-3x fa-female"></i>,
      type: "Best Gender-Equity Hack",
      content:
        "Recognizes a team that creates an innovative and inclusive solution to tackle a specific goal, with the focus on Female Empowerment & Gender-Equity."
    },
    {
      icon: <i class=" fifth fas fa-3x fa-book"></i>,
      type: "Best Ed-tech Hack",
      content:
        "Recognizes a team that develops a tool that aids online education and connects students together."
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fas sixth fa-3x fa-brain"></i>,
      type: "Best Mental Health Hack",
      content:
        "Recognizes a team that creates an innovative solution with the focus on mental wellbeing and health."
    },
    {
      icon: <i class="third fas fa-3x fa-child"></i>,
      type: "Best Beginner Hack",
      content: "Your project will qualify for this category if atleast 50% of your team has first-time hackers "
    },
    {
      icon: <i class=" fifth fa-3x fas fa-palette"></i>,
      type: "Prettiest Hack",
      content: "Recognizes the team which creates an accessible interface with a visually appealing flow, has conducted visible UX research, and built an interactive design."
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-vr-cardboard sixth fa-3x "></i>,
      type: "Best AR/VR Hack",
      content: "For this challenge, Build the best AR/VR application using the echoAR platform! The only rule is that you must use the echoAR platform."
    },
    {
      icon: <i class="fas fa-leaf third fa-3x "></i>,
      type: "Best Sustainability Hack",
      content: "Recognizes a team that creates the best hack for environment and health, with a focus on sustainability and future."
    },
    {
      icon: <i class="fas fa-school fifth fa-3x "></i>,
      type: "Best High School Hack",
      content: "Recognizes the best hack created by a team consisting of all high school students."
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Rakshaa Viswanathan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Shrinidhi Mahesh",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Darshana V",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Hassaana",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
  ] 
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: echo3D}, {src: wolfram}, {src: voiceflow}], //Array 1
  [{src: taskade}, {src: xyz}, {src: gfg}], //Array 2
  [{src: slingshot},{src: balsamiq},{src: interviewcake}],
  [{src: axure},{src: ll},{src: certopus}], //Array 3
  [{src: framer},{src: raahee },{src: onep}],
  [{src: hackplus}, {src: hackclub},{src: codingblocks}],
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'A hackathon is a 48 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'      },
      {
        label: "Who can attend?",
        content: "Kurinji Hacks is open to all women and non-binary undergraduate and high school students from all schools."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general."
      },
      {
        label: "How team formation works?",
        content: "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "All you need is to fill our form above and join Discord, we will guide you through everything there"
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (ch.chennai@superposition.tech) we would happy to help you."
      }
      ,
      {
        label: "Can I volunteer?",
        content: "Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you."
      }
      ,
      {
        label: "Will there be swag?",
        content: "Yes! Participants will recieveing Kurinji Hacks swag!."
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions
};
