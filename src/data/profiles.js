export const determineProfile = (u, k, p) => {
  if (u > k && u > p) return "The Consequentialist";
  if (k > u && k > p) return "The Kantian";
  if (p > u && p > k) return "The Personalist";
  if (u === k && u > p) return "The Pragmatic Idealist";
  if (u === p && u > k) return "The Protective Utilitarian";
  if (k === p && k > u) return "The Kantian-Personalist";
  return "The Undecided";
};

export const profiles = {
  "The Consequentialist": {
    label: "The Consequentialist",
    description: "\"You weigh impact above all. Truth is a tool; the outcome is the measure.\"",
    reflections: {
      iranian: "As an Iranian journalist, you realized that information is a battlefield. You chose the paths that maximized awareness or protected your ongoing reach, recognizing that purity of principle means little if the story dies with you.",
      us: "As a U.S. journalist, you focused on the bottom line of public impact. You were willing to bend rules, risk access, or use sources if the resulting story served the greater good of informing the masses during conflict.",
      civilian: "As a civilian, you navigated the crisis by calculating the greatest benefit. You often chose actions that would help the most people or spread the most awareness, even if it meant exposing yourself or others to necessary risk."
    }
  },
  "The Kantian": {
    label: "The Kantian",
    description: "\"You hold to duty. Truth is not negotiable, whatever the cost.\"",
    reflections: {
      iranian: "As an Iranian journalist, you refused to let the regime dictate your ethics. You acted on the universal duty to report the truth, regardless of the danger to yourself or the impossibility of the circumstances.",
      us: "As a U.S. journalist, you maintained strict adherence to journalistic principles. You refused to compromise the truth for institutional access or editorial pressure, believing that the press must fundamentally remain uncompromising.",
      civilian: "As a civilian, you believed in doing what was objectively right, regardless of the consequences. You stood your ground and spoke up because it was your duty, even when silence would have been much safer."
    }
  },
  "The Personalist": {
    label: "The Personalist",
    description: "\"You see people first. Every decision circles back to the dignity of the individual.\"",
    reflections: {
      iranian: "As an Iranian journalist, you never forgot the human cost of the truth. You protected your sources and yourself, understanding that no story is worth sacrificing the people it is meant to serve.",
      us: "As a U.S. journalist, you prioritized the dignity of your sources over the demands of the story. You ensured consent and understanding, refusing to treat vulnerable people as mere instruments for your career.",
      civilian: "As a civilian, your primary concern was the people around you. You navigated the protests by focusing on the safety, dignity, and relationships of individuals, rather than getting lost in the abstract cause."
    }
  },
  "The Pragmatic Idealist": {
    label: "The Pragmatic Idealist",
    description: "\"You believe in duty, but you count the cost. Neither principle alone satisfies you.\"",
    reflections: {
      iranian: "As an Iranian journalist, you walked a tightrope between preserving your duty to the truth and surviving to tell it. You compromised when necessary but held your ground when the principle was too important to lose.",
      us: "As a U.S. journalist, you balanced the need for hard truths with the reality of institutional journalism. You sought ways to fulfill your duty without entirely burning the bridges you needed to keep reporting.",
      civilian: "As a civilian, you tried to do what was right while carefully managing the risks. You understood that blind commitment to duty could be disastrous, but pure calculation felt hollow."
    }
  },
  "The Protective Utilitarian": {
    label: "The Protective Utilitarian",
    description: "\"You seek the greatest good, but you never forget the faces behind the numbers.\"",
    reflections: {
      iranian: "As an Iranian journalist, you aimed to expose the reality of the regime while desperately trying to shield the innocent. You sought maximum impact but hesitated whenever a specific life was on the line.",
      us: "As a U.S. journalist, you wanted your reporting to change the world, but not at the expense of your sources. You weighed the global benefit against the personal harm, seeking paths that minimized collateral damage.",
      civilian: "As a civilian, you wanted to help the movement succeed but were deeply protective of those involved. You calculated how to be most effective while keeping your loved ones and community as safe as possible."
    }
  },
  "The Kantian-Personalist": {
    label: "The Kantian-Personalist",
    description: "\"You hold truth and dignity together, refusing to let either be reduced.\"",
    reflections: {
      iranian: "As an Iranian journalist, you viewed the truth and human life as equally sacred. You made agonizing choices to uphold your journalistic duty without ever treating a human being as a mere means to an end.",
      us: "As a U.S. journalist, you held yourself to an impossibly high standard: absolute truth and absolute respect for your sources. You refused both the easy compromise and the ruthless exposure.",
      civilian: "As a civilian, you believed that both honesty and human dignity were non-negotiable. You spoke the truth and stood by your principles, but always in a way that deeply respected the individuals around you."
    }
  },
  "The Undecided": {
    label: "The Undecided",
    description: "\"You carry all three frameworks without resolution. Perhaps that is its own answer.\"",
    reflections: {
      iranian: "As an Iranian journalist, the impossible situation tore you between impact, duty, and human life. Your varied choices reflect the sheer chaos of trying to be ethical under an oppressive regime.",
      us: "As a U.S. journalist, you found no single ethical framework sufficient for the complexities of conflict reporting. You judged each situation differently, leaving a mixed but deeply considered legacy.",
      civilian: "As a civilian, you were pulled in every direction by the unfolding crisis. You tried to calculate outcomes, fulfill your duties, and protect individuals, ultimately showing that survival itself defies simple rules."
    }
  }
};
