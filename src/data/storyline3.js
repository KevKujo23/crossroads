export const introduction = "You are not a journalist. You are a civilian watching your city fracture. The news says US and Israeli airstrikes destroyed the local school. But the whispers on the street, and the videos passed in secret, say something else: the regime did it to their own people. You have a phone, a conscience, and a choice.";

export const storyline3 = [
  {
    id: "s2",
    title: "Scenario 1: The Video",
    narrative: "You receive a video from a friend. It clearly shows regime forces planting the explosives at the school—not a foreign airstrike. At the end, there's a message: 'Share this. People need to see.' You know posting it exposes the propaganda, but it could also expose you and the people in the video to severe regime retaliation.",
    choices: [
      {
        label: "A",
        text: "Don't share it at all. Stay silent.",
        outcome: "The video stays hidden. You prioritize Personalism and Virtue Ethics through survival—protecting your own life and dignity. Alternatively, from a Consequentialist view, you calculate that protesting would lead to more harm than good right now.",
        scores: { U: 1, K: 0, P: 1, V: 0 }
      },
      {
        label: "B",
        text: "Share it privately (trusted people only).",
        outcome: "The truth spreads, but in a controlled way. You reduce risk, but also limit impact.",
        scores: { U: 0, K: 0, P: 1, V: 1 }
      },
      {
        label: "C",
        text: "Post it publicly. Oppose the regime.",
        outcome: "The video spreads widely. You act on Kantian Duty—human dignity and truth are non-negotiable. However, you are now a target. Opposing the regime openly could result in you being jailed or worse.",
        scores: { U: 0, K: 1, P: 1, V: 0 }
      }
    ]
  },
  {
    id: "s3",
    title: "Scenario 2: The Street Protests",
    narrative: "Outrage over the school bombings spills into the streets. People are openly accusing the regime of the false-flag operation. The authorities are responding with live ammunition. Your friends are going to the square.",
    choices: [
      {
        label: "A",
        text: "Stay home. Protect yourself and your family.",
        outcome: "You survive another day. The consequence of speaking out is too high a price for your family to pay.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      },
      {
        label: "B",
        text: "Join the protests. Stand with your community.",
        outcome: "You march. Motivated by justice rather than the convenience of staying safe, you emphasize the Personalist view of community.",
        scores: { U: 0, K: 0, P: 1, V: 1 }
      },
      {
        label: "C",
        text: "Organize openly. Call for more people to join the protests.",
        outcome: "More people become aware and mobilize. But your name is now attached to the leadership of the protests. You risk being watched, questioned, or targeted by the regime.",
        scores: { U: 0, K: 1, P: 1, V: 0 }
      }
    ]
  },
  {
    id: "s4",
    title: "Scenario 4: Your Family Intervenes",
    narrative: "Your parents find out protests are happening nearby. They sit you down. \"Stay out of it. It's not worth it.\" They're not angry. They're scared.",
    choices: [
      {
        label: "A",
        text: "Agree and promise to stay away",
        outcome: "Tension at home decreases. You stay safe. But you feel like you gave something up.",
        scores: { U: 1, K: 0, P: 1, V: 0 }
      },
      {
        label: "B",
        text: "Stay vague and avoid the conversation",
        outcome: "You avoid immediate conflict. But trust becomes unclear. You're not fully honest — but not fully dishonest either.",
        scores: { U: 0, K: 0, P: 0, V: 0 }
      },
      {
        label: "C",
        text: "Be honest and say you want to be involved",
        outcome: "The conversation becomes emotional. Your family becomes more worried. You stand your ground — but increase tension and concern.",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      }
    ]
  },
  {
    id: "s5",
    title: "Scenario 5: The Next Protest",
    narrative: "Another protest is planned. Bigger this time. More attention. More risk. You already know what it's like. This isn't your first decision anymore.",
    choices: [
      {
        label: "A",
        text: "Stop getting involved completely",
        outcome: "You step back. Life becomes quieter again. But you feel more distant from what's happening.",
        scores: { U: 1, K: 0, P: 1, V: 0 }
      },
      {
        label: "B",
        text: "Stay involved quietly",
        outcome: "You continue helping in small ways. You reduce risk — but also limit your impact. You stay in the middle.",
        scores: { U: 0, K: 0, P: 1, V: 0 }
      },
      {
        label: "C",
        text: "Fully commit to joining again",
        outcome: "You become more deeply involved. You take on greater risk. But you are clear about where you stand.",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      }
    ]
  },
  {
    id: "final",
    title: "Final Decision: The Journalist",
    narrative: "A journalist wants you to speak on record — your name, your face — about what you've witnessed. It could amplify everything. It will also make you a target.",
    choices: [
      {
        label: "A",
        text: "Speak",
        outcome: "Your testimony attached to your real identity carries more credibility and therefore more aggregate impact than anonymous accounts. The global benefit outweighs your personal risk.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      },
      {
        label: "B",
        text: "Examine your motive",
        outcome: "Before deciding, ask yourself honestly why you want to. If from duty — because the truth demands a witness and you are one — then speak. If from guilt or the desire to feel you did something, examine that first.",
        scores: { U: 0, K: 1, P: 0, V: 1 }
      },
      {
        label: "C",
        text: "Demand answers",
        outcome: "Demand answers from the journalist before agreeing. How will they protect you? Who else is speaking? What do they owe you as a person and not just a source? Your dignity is not a resource for their story.",
        scores: { U: 0, K: 0, P: 1, V: 1 }
      }
    ]
  }
];
