export const storyline2 = [
  {
    id: "d1",
    title: "Decision 1",
    narrative: "You have documented proof that Pentagon statements contradict on-the-ground reality. Publishing will cost your access. Holding it protects your position to report future stories.",
    choices: [
      {
        label: "A",
        text: "Publish now",
        outcome: "The public benefit of this specific truth during an active conflict outweighs the long-term value of your access. More people are served by this story than by your hypothetical future stories.",
        scores: { U: 1, K: 0, P: 0 }
      },
      {
        label: "B",
        text: "Publish from duty, not calculation",
        outcome: "Withholding verified truth to protect your career fails universalizability — if every journalist did this, the press would be structurally incapable of accountability. Publish because it's your duty, not because you've run the numbers.",
        scores: { U: 0, K: 1, P: 0 }
      },
      {
        label: "C",
        text: "Consult sources before publishing",
        outcome: "Before publishing, return to the people whose testimony forms the basis of the story. Confirm they understand what comes next. Their dignity demands they be participants in the story's telling, not sources already extracted.",
        scores: { U: 0, K: 0, P: 1 }
      }
    ]
  },
  {
    id: "d2",
    title: "Decision 2",
    narrative: "Your editor asks you to soften accurate language in a follow-up investigation. \"We need to be careful,\" they say.",
    choices: [
      {
        label: "A",
        text: "Soften slightly",
        outcome: "A story that runs with minor framing adjustments reaches more people than one that gets killed. Partial truth published beats perfect truth unpublished.",
        scores: { U: 1, K: 0, P: 0 }
      },
      {
        label: "B",
        text: "Refuse",
        outcome: "Refuse. Softening accurate language to reduce institutional friction means acting from fear, not duty. The motivation is wrong. You cannot will a world where all journalists adjust truth under editorial pressure.",
        scores: { U: 0, K: 1, P: 0 }
      },
      {
        label: "C",
        text: "Ask who the softening serves",
        outcome: "Ask who the softening serves. If it protects vulnerable sources, it may be justified. If it protects institutional relationships, it turns the people the story is about into instruments of your career. Push back on that specific basis.",
        scores: { U: 0, K: 0, P: 1 }
      }
    ]
  },
  {
    id: "d3",
    title: "Decision 3",
    narrative: "A government insider offers to confirm your investigation on background. It breaks the story definitively — but puts them at serious legal risk. They say they want to help.",
    choices: [
      {
        label: "A",
        text: "Use it",
        outcome: "The public benefit of a fully confirmed story during an active conflict outweighs the risk to one person who has voluntarily offered to take that risk.",
        scores: { U: 1, K: 0, P: 0 }
      },
      {
        label: "B",
        text: "Use only what they can provide safely",
        outcome: "Use only what they can provide without endangering themselves. A person's willingness to help does not license using them until they suffer for it. The maxim fails universalizability.",
        scores: { U: 0, K: 1, P: 0 }
      },
      {
        label: "C",
        text: "Have a full conversation first",
        outcome: "Have a full, unhurried conversation. Don't accept their offer at face value. Explain exactly what legal risk means in concrete terms. Their dignity demands more than consent — it demands genuine understanding.",
        scores: { U: 0, K: 0, P: 1 }
      }
    ]
  }
];
