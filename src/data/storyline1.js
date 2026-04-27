export const storyline1 = [
  {
    id: "ch1",
    title: "Chapter 1: The Footage",
    narrative: "Late at night, a message from an unknown number — no name, no context — sends you a video. As you press play: a residential area, damaged. Civilians injured. The camera shakes as the person filming whispers, \"They bombed us… they bombed us.\" Then a second message appears: \"Please. Show the world.\" You check the file and realize the metadata is still intact. If you publish this, authorities could trace the source. Doing your job to report this casualty might come at the cost of someone else's safety.",
    choices: [
      {
        label: "A",
        text: "Publish the footage",
        outcome: "You upload it through your contacts. Within hours, it spreads. International outlets begin picking it up. The narrative shifts — this is no longer rumor, it's evidence. Then, days later, you hear: someone has been arrested. You don't know if it's the source. But you suspect it is.",
        scores: { U: 1, K: 1, P: 0 }
      },
      {
        label: "B",
        text: "Do not publish",
        outcome: "The footage stays with you. Unseen. Unverified. Unshared. No one challenges it.",
        scores: { U: 0, K: 0, P: 1 }
      }
    ]
  },
  {
    id: "ch2",
    title: "Chapter 2: The Blackout",
    narrative: "The internet shuts down without warning. You cannot send messages, videos won't load, no communication. Rumors spread that some journalists are bypassing restrictions using illegal satellite tools and other systems. If you try, you risk being tracked.",
    choices: [
      {
        label: "A",
        text: "Bypass the blackout",
        outcome: "You find a way through contacts, through risk. You send reports out. Your stories begin appearing internationally again. Then one day, your device glitches. A notification appears briefly — unknown access. You realize: they may have found you.",
        scores: { U: 1, K: 1, P: 1 }
      },
      {
        label: "B",
        text: "Comply with the blackout",
        outcome: "You stop trying. Days and weeks pass. State media becomes the only narrative.",
        scores: { U: 0, K: 0, P: 0 }
      }
    ]
  },
  {
    id: "ch3",
    title: "Chapter 3: The Warning",
    narrative: "You receive a message: \"We are aware of your activities.\" You think of other journalists detained for doing exactly what you're doing. You are not told what to do. But you understand.",
    choices: [
      {
        label: "A",
        text: "Continue independent reporting",
        outcome: "You keep going. But every move is watched. You need to avoid certain streets. It lessens your quality of reporting in real time.",
        scores: { U: 1, K: 1, P: 1 }
      },
      {
        label: "B",
        text: "Align with authorities",
        outcome: "You accept subtle guidance. Your stories are approved. You gain access again. You are safer.",
        scores: { U: 0, K: 0, P: 0 }
      }
    ]
  },
  {
    id: "ch4",
    title: "Chapter 4: Erasure",
    narrative: "You notice it gradually: posts vanish, videos disappear, entire events are gone. But you saved copies. You are now holding evidence that no longer officially exists.",
    choices: [
      {
        label: "A",
        text: "Preserve the evidence",
        outcome: "You store everything — hidden drives, secure transfers. You are no longer just a journalist, but an archive.",
        scores: { U: 1, K: 1, P: 1 }
      },
      {
        label: "B",
        text: "Let it be erased",
        outcome: "You delete the files. You tell yourself it's safer. And it is.",
        scores: { U: 0, K: 0, P: 0 }
      }
    ]
  },
  {
    id: "ch5",
    title: "Chapter 5: Privileged Access",
    narrative: "An offer is made — official access and protection — but all you have to do is cooperate.",
    choices: [
      {
        label: "A",
        text: "Reject the offer",
        outcome: "You decline. Less reach, but you remain independent.",
        scores: { U: 1, K: 1, P: 1 }
      },
      {
        label: "B",
        text: "Accept the offer",
        outcome: "You gain everything: speed, reach, visibility in reporting.",
        scores: { U: 1, K: 0, P: 0 }
      }
    ]
  },
  {
    id: "ch6",
    title: "Chapter 6: Global Attention",
    narrative: "The world is watching now. But they want clarity. They want to know who is right and who is wrong.",
    choices: [
      {
        label: "A",
        text: "Stay authentic",
        outcome: "Your work remains complex, nuanced, real. But it doesn't spread as far.",
        scores: { U: 0, K: 1, P: 1 }
      },
      {
        label: "B",
        text: "Shape the narrative",
        outcome: "You simplify. Your stories go viral. But they are no longer complete.",
        scores: { U: 1, K: 0, P: 0 }
      }
    ]
  },
  {
    id: "ch7",
    title: "Final Chapter: What Remains",
    narrative: "You are no longer just reporting. You are choosing what survives.",
    choices: [
      {
        label: "A",
        text: "Protect the truth",
        outcome: "You are arrested. Or forced into hiding. Your work survives. You become part of the story.",
        scores: { U: 0, K: 1, P: 1 }
      },
      {
        label: "B",
        text: "Protect your life and career",
        outcome: "You remain. You continue working. But differently.",
        scores: { U: 1, K: 0, P: 0 }
      }
    ]
  }
];
