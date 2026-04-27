export const storyline3 = [
  {
    id: "s2",
    title: "Scenario 2: The Video",
    narrative: "You receive a video from a friend. It shows a protest turning violent. Faces are visible. Voices are clear. At the end, there's a message: \"Share this. People need to see.\" You know posting it could spread awareness. You also know it could expose the people in it.",
    choices: [
      {
        label: "A",
        text: "Don't share it at all",
        outcome: "No additional risk is created. But the video stays limited. Fewer people know what's happening. You wonder if silence is protecting — or hiding the truth.",
        scores: { U: 1, K: 0, P: 1 }
      },
      {
        label: "B",
        text: "Share it privately",
        outcome: "The information spreads — but in a controlled way. You reduce risk, but also limit impact. You're helping — but not fully.",
        scores: { U: 0, K: 0, P: 1 }
      },
      {
        label: "C",
        text: "Post it publicly",
        outcome: "The video spreads widely. More people see what's happening. But those in the video may now be at risk. You helped expose the truth — but may have exposed people too.",
        scores: { U: 0, K: 1, P: 1 }
      }
    ]
  },
  {
    id: "s3",
    title: "Scenario 3: A Friend Gets Arrested",
    narrative: "The next day, you hear that someone you know was taken. No one knows where they are. People start whispering, sharing names, asking questions. You're asked: \"Do you know anything?\"",
    choices: [
      {
        label: "A",
        text: "Say nothing",
        outcome: "You stay safe. But you don't help find answers. You feel like you're protecting yourself — but leaving others behind.",
        scores: { U: 1, K: 0, P: 0 }
      },
      {
        label: "B",
        text: "Ask around quietly",
        outcome: "You gather small pieces of information. You help a little — but stay careful. You are involved, but not exposed.",
        scores: { U: 0, K: 0, P: 1 }
      },
      {
        label: "C",
        text: "Speak up publicly about it",
        outcome: "More people become aware. But your name is now attached to the situation. You risk being watched, questioned, or targeted.",
        scores: { U: 0, K: 1, P: 1 }
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
        scores: { U: 1, K: 0, P: 1 }
      },
      {
        label: "B",
        text: "Stay vague and avoid the conversation",
        outcome: "You avoid immediate conflict. But trust becomes unclear. You're not fully honest — but not fully dishonest either.",
        scores: { U: 0, K: 0, P: 0 }
      },
      {
        label: "C",
        text: "Be honest and say you want to be involved",
        outcome: "The conversation becomes emotional. Your family becomes more worried. You stand your ground — but increase tension and concern.",
        scores: { U: 0, K: 1, P: 1 }
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
        scores: { U: 1, K: 0, P: 1 }
      },
      {
        label: "B",
        text: "Stay involved quietly",
        outcome: "You continue helping in small ways. You reduce risk — but also limit your impact. You stay in the middle.",
        scores: { U: 0, K: 0, P: 1 }
      },
      {
        label: "C",
        text: "Fully commit to joining again",
        outcome: "You become more deeply involved. You take on greater risk. But you are clear about where you stand.",
        scores: { U: 0, K: 1, P: 1 }
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
        scores: { U: 1, K: 0, P: 0 }
      },
      {
        label: "B",
        text: "Examine your motive",
        outcome: "Before deciding, ask yourself honestly why you want to. If from duty — because the truth demands a witness and you are one — then speak. If from guilt or the desire to feel you did something, examine that first.",
        scores: { U: 0, K: 1, P: 0 }
      },
      {
        label: "C",
        text: "Demand answers",
        outcome: "Demand answers from the journalist before agreeing. How will they protect you? Who else is speaking? What do they owe you as a person and not just a source? Your dignity is not a resource for their story.",
        scores: { U: 0, K: 0, P: 1 }
      }
    ]
  }
];
