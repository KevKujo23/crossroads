export const storyline2 = [
  {
    id: "d1",
    title: "Chapter 1: THE MAINSTREAM NARRATIVE",
    narrative: "You are Daniel, a US journalist covering the escalating conflict in Iran. You have documented proof that Pentagon statements contradict on-the-ground reality. Publishing will cost your access. Holding it protects your position to report future stories.\n\nMainstream media networks are overwhelmingly running a story that US and Israeli airstrikes are bombing Iranian schools. However, your on-the-ground sources and verified footage prove the opposite: the atrocities were committed by the Islamic Republic against their own people, designed as propaganda to frame the US and Israel.\n\nYour network executives have already approved the US/Israel-blame narrative because it aligns with current mainstream sentiment.",
    choices: [
      {
        label: "A",
        text: "Present the facts on their own: Expose the regime's propaganda",
        outcome: "Choosing to present the facts as they are, you move forward with a story that exposes the regime's propaganda and highlights the inconsistencies others have avoided. In doing so, you fulfill your role as a journalist at its core: committed to truth above all else. This decision reflects a strong alignment with Kantian duty ethics, where truth-telling is treated as a moral obligation. At the same time, it reflects virtue ethics, as you act with courage and integrity even when it isolates you.\n\nYet the cost becomes evident almost immediately. Your position in the industry weakens. Editors and senior figures begin to distance themselves, not necessarily because your reporting is inaccurate, but because it introduces risk. Opportunities begin to disappear, and your credibility within the system starts to erode. In choosing truth, you preserve your integrity, but you lose stability, access, and influence.",
        frameworkContext: "- Kantian Duty Ethics: Truth-telling is a moral obligation.\n- Personalism: Respects the dignity of those harmed by the regime.\n- Virtue Ethics: Acts with courage and integrity (phronesis).",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      },
      {
        label: "B",
        text: "Follow the mainstream narrative: Blame the US/Israel airstrikes",
        outcome: "Within the industry, this decision is rewarded. You are seen as reliable, cooperative, and aligned with expectations. Your editors trust you, your work is given prominence, and your career begins to advance. Your name becomes associated with professionalism and success, and the system responds by elevating you within it.\n\nHowever, this path carries its own ethical tension. Certain perspectives are minimized, contradictions are left unexplored, and truths remain unspoken. Your work becomes shaped by what the majority wants you to write and what is deemed acceptable.",
        frameworkContext: "- Utilitarianism: Prioritizes stability and professional success.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      }
    ]
  },
  {
    id: "d2",
    title: "Chapter 2: THE NEWSROOM DILEMMA",
    narrative: "As the controversy grows, your editors feel the heat. They pull you into a meeting and exert subtle pressure: 'Can we verify this further? Do we need to push this angle right now?' They ask you to soften the accurate language in your follow-up piece to reduce friction with the government.",
    choices: [
      {
        label: "A",
        text: "Maintain the accuracy of language",
        outcome: "You are fulfilling the role of a journalist to its fullest extent by reporting based on facts. You respect the dignity of the people involved by sharing information about their situation, highlighting who should be held accountable, and illuminating the true context of the escalating conflict. You are using your talent to fulfill your telos—your purpose—which is to shed light on the truth no matter how uncomfortable it gets. Furthermore, you act as a gift to the community by remaining virtuous and honoring their dignity.\n\nHowever, your career and livelihood are now at risk. Leadership wants to decrease your salary and assign you fewer projects because your work didn't meet the boardroom's expectations. To them, you are viewed as uncooperative, and your reputation in the industry is tarnished because your reporting doesn't align with the mainstream narrative.",
        frameworkContext: "- Kantian Ethics: Fulfilling duty to report facts.\n- Personalism: Respecting human dignity.\n- Virtue Ethics: Fulfilling purpose (telos) through integrity.",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      },
      {
        label: "B",
        text: "Adjust the language to appease editors and ensure publication",
        outcome: "The boardroom and editorial staff commend your craftsmanship. To them, your work is phenomenal because you compromised and followed leadership's demands. You successfully articulated their desired narrative, refining it to grab the masses' attention and spark debates just from the headlines.\n\nHowever, you are using your writing talent to obscure real events and profit from the conflict, instead of presenting the facts as they are. By only presenting a partial truth rather than the whole picture, you compromise your journalistic integrity, which fundamentally contradicts your duty to humanity.",
        frameworkContext: "- Utilitarianism: Prioritizes institutional approval and mass attention.\n- Kantian Ethics: Compromising truth violates duty to humanity.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      },
      {
        label: "C",
        text: "Ask who the softening of language serves",
        outcome: "If the change is made to protect vulnerable sources or people at risk, then it can be ethically justified because it prioritizes their safety and dignity. However, if the softening is done to protect your access, your career, or your organization's relationships, then it becomes ethically problematic. In that case, you are no longer serving the truth or the people in the story, but instead serving institutional interests. This turns the people affected by the story into tools for maintaining your position, which goes against ethical journalism.",
        frameworkContext: "- Personalism: Potential justification through protection of personhood.\n- Virtue Ethics: Prudence in evaluating institutional vs. human interests.",
        scores: { U: 0, K: 0, P: 1, V: 1 }
      }
    ]
  },
  {
    id: "d3",
    title: "Chapter 3: THE BURDEN OF TRUST",
    narrative: "A government insider offers to confirm your investigation on background. It breaks the story definitively — but puts them at serious legal risk. They say they want to help.",
    choices: [
      {
        label: "A",
        text: "Accept the information and use it fully",
        outcome: "You accept the information and use it fully. The story, once published, becomes undeniable—no longer speculation, but fact. The public gains clarity at a critical moment, and the impact is immediate. You justify the decision through the belief that the greater good outweighs the cost, especially since the source made the choice to come forward. But beneath the clarity of the story is an unspoken reality: the consequences are no longer yours alone. If harm comes to them, it becomes part of the cost of your decision.",
        frameworkContext: "- Utilitarianism: The greater good outweighs the individual cost.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      },
      {
        label: "B",
        text: "Use only what they can provide without endangering themselves",
        outcome: "You draw a line. You listen, but you refuse to use any information that could meaningfully endanger them, even if they insist. Their willingness does not grant you the right to expose them to harm. You limit what you take, what you write, and what you publish. The story remains incomplete—strong, but not definitive. You preserve the principle that a person must never be used merely as a means to an end, even in pursuit of truth. But you are left with the tension of knowing that the full truth was within reach—and you chose not to take it.",
        frameworkContext: "- Kantian Ethics: A person must never be used merely as a means to an end.",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      }
    ]
  }
];
