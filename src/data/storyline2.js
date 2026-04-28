export const storyline2 = [
  {
    id: "d1",
    title: "Decision 1: The Mainstream Narrative",
    narrative: "You are covering the escalating conflict in Iran. Mainstream media networks are overwhelmingly running a story that US and Israeli airstrikes are bombing Iranian schools. However, your on-the-ground sources and verified footage prove the opposite: the atrocities were committed by the Islamic Republic against their own people, designed as propaganda to frame the US and Israel.\n\nYour network executives have already approved the US/Israel-blame narrative because it aligns with current mainstream sentiment.",
    choices: [
      {
        label: "A",
        text: "Present the facts on their own. Expose the regime's propaganda.",
        outcome: "You publish the truth. Immediately, you are attacked as 'biased' and face the threat of being blacklisted. However, you acted with Virtue Ethics—prioritizing the truth and the real victims over your own career safety.",
        scores: { U: 1, K: 1, P: 0, V: 1 } // Virtuous courage, Kantian duty
      },
      {
        label: "B",
        text: "Follow the mainstream narrative. Blame the US/Israel airstrikes.",
        outcome: "You protect your career and gain the approval of your executives. However, you have made the real victims into mere 'instruments' for a geopolitical narrative. You chose Utilitarianism (general network happiness) and a twisted Kantian duty to your employer, but abandoned the truth.",
        scores: { U: 1, K: 0, P: 0, V: 0 } // Utilitarian career preservation
      }
    ]
  },
  {
    id: "d2",
    title: "Decision 2: The Fallout",
    narrative: "Because of your previous choice, the narrative is volatile. A whistleblower from within the regime reaches out to you, offering undeniable proof of the domestic school bombings. But they are terrified. If you use their evidence, they will likely be executed. If you don't, the propaganda continues indefinitely.",
    choices: [
      {
        label: "A",
        text: "Publish the proof immediately to stop the global propaganda.",
        outcome: "The world finally sees the truth. The propaganda machine takes a massive hit. However, your source goes missing shortly after. The utilitarian 'greatest good' was achieved, but at the ultimate cost to an individual.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      },
      {
        label: "B",
        text: "Bury the evidence to protect the whistleblower's life.",
        outcome: "The source lives. You prioritize their inherent human dignity over a global news scoop. The propaganda continues, but you sleep knowing you didn't trade a life for a headline.",
        scores: { U: 0, K: 0, P: 1, V: 1 }
      },
      {
        label: "C",
        text: "Share the evidence privately with independent watchdog networks.",
        outcome: "The information spreads slower, but safely. You prioritize the dignity and safety of your source over the immediate impact of a viral scoop.",
        scores: { U: 0, K: 1, P: 1, V: 0 }
      }
    ]
  },
  {
    id: "d3",
    title: "Decision 3: The Newsroom Dilemma",
    narrative: "As the controversy grows, your editors feel the heat. They pull you into a meeting and exert subtle pressure: 'Can we verify this further? Do we need to push this angle right now?' They ask you to soften the accurate language in your follow-up piece to reduce friction with the government.",
    choices: [
      {
        label: "A",
        text: "Hold the line. Maintain the accuracy of the language.",
        outcome: "You refuse to dilute the truth. The story is published, but you are marked as 'difficult' in the newsroom. You maintain your professional integrity.",
        scores: { U: 0, K: 1, P: 0, V: 1 }
      },
      {
        label: "B",
        text: "Adjust the framing slightly to appease editors and ensure publication.",
        outcome: "The story runs, reaching millions, but the sharpest truths are blunted. You justify it by claiming a partial truth published is better than a perfect truth killed.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      }
    ]
  },
  {
    id: "d4",
    title: "Decision 4: Becoming the Story",
    narrative: "The cost shifts from professional to personal. You are facing coordinated online harassment, public attacks on your credibility, and immense stress. Your moral conflict deepens: Is success defined by visibility and access, or by accuracy and accountability?",
    choices: [
      {
        label: "A",
        text: "Use your platform to amplify the truth further, despite the risk.",
        outcome: "You lean into the storm. As noted in the Stanford Encyclopedia of Philosophy regarding Virtue Ethics, moral character is forged through habituation in difficult circumstances. You choose courage.",
        scores: { U: 1, K: 0, P: 0, V: 1 }
      },
      {
        label: "B",
        text: "Step back quietly. Pass your remaining evidence to others.",
        outcome: "You recognize your human limits. Protecting your own mental well-being and dignity takes precedence. The story continues without your name attached.",
        scores: { U: 0, K: 0, P: 1, V: 0 }
      }
    ]
  },
  {
    id: "d5",
    title: "Decision 5: The Ultimatum",
    narrative: "A high-level whistleblower offers the final piece of undeniable proof. However, using it violates strict newsroom policies on unauthorized leaks. Your editor issues an ultimatum: 'If you publish this on your own, you are fired, and you will be blacklisted.'",
    choices: [
      {
        label: "A",
        text: "Publish it independently. Burn the career to save the truth.",
        outcome: "You are fired. Your mainstream career is over. But the truth is out. You acted not as an instrument of a newsroom, but as a protector of the public. (The ultimate Kantian and Personalist sacrifice).",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      },
      {
        label: "B",
        text: "Bury the leak. Keep your job.",
        outcome: "You survive. You keep your platform for future stories. But the truth of this conflict remains selectively presented. You are a successful journalist, but you carry a permanent moral debt.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      }
    ]
  }
];
