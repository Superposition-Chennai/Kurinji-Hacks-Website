// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import echo3D from "./Assets/sponsorsLogos/echo3D.png";
import codingblocks from "./Assets/sponsorsLogos/coding blocks.png";
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
import mlh from "./Assets/sponsorsLogos/mlh.png";
import koii from "./Assets/sponsorsLogos/koii.png";
import digo from "./Assets/sponsorsLogos/do.png";
import replit from "./Assets/sponsorsLogos/replit.png";
import symbl from "./Assets/sponsorsLogos/symblai.svg";

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
  instagram: "https://www.instagram.com/kurinjihacks/",
  discord: "https://discord.com/invite/GVFs3kSbsF/",
  linkedin: "https://www.linkedin.com/company/kurinji-hacks",
  twitter: "https://twitter.com/KurinjiHacks",
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
  CodeOfConduct: {
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
const Tracks = [
  [{
    icon: <i class="first fas fa-3x fa-handshake"></i>,
    type: "Diversity and Inclusivity",
    content:"Build an innovative and inclusive solution with the focus on Female Empowerment & Gender-Equity."
  },
  {
    icon: <i class="first fas fa-3x fa-graduation-cap"></i>,
    type: "Education",
    content:"Develop an innovative tool that aids online education and connects students together."
  },
  {
    icon: <i class="first fas fa-3x fa-cloud-sun-rain"></i>,
    type: "Sustainability",
    content:"Build an innovative solution for environment and health, with a focus on sustainability and future."
  }
  ],
  [
    {
      icon: <i class="first fas fa-3x fa-brain"></i>,
      type: "Mental Health",
      content:"Build an innovative solution with the focus on mental wellbeing and health."
    },
    {
      icon: <i class="first fas fa-3x fa-lightbulb"></i>,
      type: "Open Innovation",
      content:"Develop an innovative solution for any problem you can think of :) Sky is the limit!"
    }
  ],
];

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
      type: "Best Diversity and Inclusivity Hack",
      content:
        "Each team member gets a 25$ Amazon Gift Card and 100$ worth Digital Ocean Credits"
    },
    {
      icon: <i class=" fifth fas fa-3x fa-book"></i>,
      type: "Best Ed-tech Hack",
      content:
        "Each team member gets a GeeksforGeeks Gift Card worth ₹2000 and 100$ worth Digital Ocean Credits"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fas sixth fa-3x fa-brain"></i>,
      type: "Best Mental Health Hack",
      content:
      "Each team member gets an opportunity to intern with Raahee and 125$ worth Digital Ocean Credits"
    },
    {
      icon: <i class="third fas fa-3x fa-child"></i>,
      type: "Best Beginner Hack",
      content: "Each team member gets 70% off on Coding Blocks Courses, Lifetime Upgrades of Taskade Unlimited, and 100$ worth Digital Ocean Credits"
    },
    {
      icon: <i class=" fifth fa-3x fas fa-palette"></i>,
      type: "Prettiest Hack",
      content: "The team gets a total of 24 months of access to Framer Pro and each team member gets 1 year subscription to Axure RP Team Edition"
    }
  ],
  [
    {
      icon: <i class="fas fa-leaf third fa-3x "></i>,
      type: "Best Sustainability Hack",
      content: "Each team member gets access to the Leading Learners Ed-tech Bundle and Expansion Pack, valued at 100$ each"
    },
    {
      icon: <i class="fas fa-school fifth fa-3x "></i>,
      type: "Best High School Hack",
      content: "Each team member gets 70% off on Coding Blocks Courses, Lifetime Upgrades of Taskade Unlimited, and a 15$ Amazon Gift Card"
    },
    {
      icon: <i class="fas fa-robot sixth fa-3x "></i>,
      type: "Best AI Hack",
      content: "Symbl.ai Track - Resources and Goodies from Symbl.ai, Voiceflow Track - 1 year of Voiceflow Professional License"
    },
  ],
  [ 
    {
      icon: <i class="fas fa-project-diagram third fa-3x "></i>,
      type: "Best Blockchain/Web 3.0 Hack with Koii",
      content: "Resources, Credits and Goodies from Koii valued at 100$ and an opportunity to work with them"
    },
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
  [{src: mlh},{src:koii},{src: digo},],
  [{src: echo3D}, {src: wolfram}, {src: voiceflow}], //Array 1
  [{src: taskade}, {src: xyz}, {src: gfg}], //Array 2
  [{src: replit},{src: balsamiq},{src: interviewcake}],
  [{src: axure},{src: ll},{src:symbl}], //Array 3
  [{src: framer},,{src: onep},{src: certopus}],
  [{src: hackplus},{src: codingblocks},{src: raahee }],
  [{src: hackclub},{src: slingshot}]
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
  Tracks,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions
};
