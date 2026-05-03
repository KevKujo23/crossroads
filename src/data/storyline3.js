export const introduction = "You are Parisa, an Iranian citizen. You are not a journalist, but a civilian watching your city fracture. The news says foreign airstrikes destroyed a local school, but the whispers on the street—and the videos passed in secret—say something else. You have a phone, a conscience, and a choice.";

export const storyline3 = [
  {
    id: "s1",
    title: "Chapter 1: THE VIDEO",
    narrative: "You receive a video from a friend. It clearly shows regime forces planting the explosives at the school—not a foreign airstrike. At the end, there's a message: 'Share this. People need to see.' You know posting it exposes the propaganda, but it could also expose you and the people in the video to severe regime retaliation.",
    choices: [
      {
        label: "A",
        text: "Don't share it at all, stay silent",
        outcome: "You choose to keep it safe to avoid the atrocities you might face if you shared it. However, suppressing the truth allows false narratives to dominate, and public debates become grounded in propaganda instead of reality.",
        frameworkContext: "- Personalism: Protecting others' safety comes first.",
        scores: { U: 0, K: 0, P: 1, V: 0 }
      },
      {
        label: "B",
        text: "Share it privately (trusted people only)",
        outcome: "These people would share it to other people or loved ones, and because of this it has been posted. Because of your video, not only your life is at stake but also it could cause potential harm to the last person who shared and your friend as the source.\n\nOutcome: The information spreads—but in a controlled way. You reduce risk, but also limit impact. You're helping—but not fully.",
        frameworkContext: "- Virtue Ethics: Balance between caution and responsibility.\n- Personalism: You try to inform without fully exposing others.",
        scores: { U: 0, K: 0, P: 1, V: 1 }
      },
      {
        label: "C",
        text: "Post it publicly",
        outcome: "You share the truth with the public because they deserve to know. You want to spread awareness globally so other nations can understand the real events that have been unfolding. However, you are putting the life of the original source at stake. Your friend could be tracked, harmed, or even killed.",
        frameworkContext: "- Kantian Duty Ethics: Truth should be revealed, even if risky.\n- Personalism (community): Awareness can protect dignity on a larger scale.\n- Utilitarianism: Prioritizes the greater good of global awareness.",
        scores: { U: 1, K: 1, P: 1, V: 0 }
      }
    ]
  },
  {
    id: "s2",
    title: "Chapter 2: THE STREET PROTESTS",
    narrative: "Outrage over the school bombings spills into the streets. People are openly accusing the regime of the false-flag operation. The authorities are responding with live ammunition. Your friends are going to the square.",
    choices: [
      {
        label: "A",
        text: "Stay hidden",
        outcome: "Choosing to stay hidden prioritizes your safety in a moment where the risks are immediate and life-threatening. As a citizen, this can be understood as an act of self-preservation, recognizing that your life and well-being hold value, and that survival itself is not morally insignificant.\n\nHowever, this choice carries a deeper moral tension. By not joining the protests, you distance yourself from the collective experience of your community. While others—your friends included—are stepping forward despite the danger, you remain on the sidelines. This can feel like a withdrawal from shared responsibility, especially in a moment where people are standing up against injustice.",
        frameworkContext: "- Prudence: Self-preservation in the face of immediate danger.\n- Personalism: Tension between individual safety and collective responsibility.",
        scores: { U: 0, K: 0, P: 0, V: 0 }
      },
      {
        label: "B",
        text: "Join the protests, stand with your community",
        outcome: "Choosing to join the protests is an act of solidarity. As a citizen, it shows a willingness to stand with your community during a moment of crisis, especially when injustice is being openly challenged. Morally, this aligns with virtue ethics, particularly courage and justice as you choose to act instead of staying passive in the face of harm. It also reflects personalism, because you recognize the dignity of others and refuse to distance yourself from their suffering.\n\nHowever, this decision comes with serious consequences. You are placing yourself in immediate physical danger, especially in a situation where authorities may respond with force, even live ammunition.",
        frameworkContext: "- Virtue Ethics: Courage and justice in the face of harm.\n- Personalism: Solidarity with the suffering of others.",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      }
    ]
  },
  {
    id: "s3",
    title: "Chapter 3: A FRIEND GETS ARRESTED",
    narrative: "The next day, you hear that someone you know was taken. No one knows where they are. People start whispering, sharing names, asking questions. You're asked: 'Do you know anything?'",
    choices: [
      {
        label: "A",
        text: "Say nothing",
        outcome: "If you stay silent, you protect yourself. You avoid being connected, avoid being questioned, avoid being pulled into something dangerous. From a consequentialist perspective, this makes sense—if speaking could lead to more harm, then staying quiet minimizes risk. It also reflects virtue ethics in the form of prudence, where choosing safety is seen as a careful and rational response. But at the same time, it shows a limit in practicing virtue ethics as a whole. By prioritizing safety, you are not fully acting on virtues like courage and justice—you are choosing caution over moral action. The silence doesn't feel neutral. It stays with you. You realize that by saying nothing, you're also allowing the situation to remain unresolved. You're safe—but it feels like you chose yourself over someone who no longer has that choice.",
        frameworkContext: "- Consequentialism: Speaking could make things worse.\n- Virtue Ethics (prudence): Silence avoids further danger.",
        scores: { U: 1, K: 0, P: 0, V: 1 }
      },
      {
        label: "B",
        text: "Speak up publicly about it",
        outcome: "You raise awareness. More people begin to pay attention, and the situation is no longer ignored. But your involvement becomes visible. Your name is now connected to what happened, and that comes with risk that you could be watched, questioned, or targeted. You help bring attention to the issue, but you also put yourself in a vulnerable position.",
        frameworkContext: "- Kantian Duty Ethics: Injustice should be called out.\n- Personalism: Defending another person's dignity matters.",
        scores: { U: 0, K: 1, P: 1, V: 0 }
      }
    ]
  },
  {
    id: "s4",
    title: "Chapter 4: ON THE RECORD",
    narrative: "A journalist wants you to speak on record — your name, your face — about what you've witnessed. It could amplify everything. It will also make you a target.",
    choices: [
      {
        label: "A",
        text: "Speak",
        outcome: "Your testimony carries weight. It feels real to people who watch it. It spreads further than anonymous accounts would. It gives shape to something that is usually hidden. There's a sense that what you said mattered—that it reached people beyond where you are. But at the same time, you lose anonymity. You become identifiable. Your words don't just exist as information—they exist as something tied to you. That exposure brings risk. You could be watched, questioned, or targeted. What you shared cannot be taken back.",
        frameworkContext: "- Utilitarianism: Maximizes global awareness and impact.\n- Personalism: Affirms the dignity of victims through witness.\n- Virtue Ethics: Demonstrates immense moral courage.",
        scores: { U: 1, K: 1, P: 1, V: 1 }
      },
      {
        label: "B",
        text: "Refuse",
        outcome: "You protect yourself. You remain out of reach, out of focus, out of immediate danger. From a consequentialist perspective, this choice minimizes harm—not just to you, but potentially to your family, who could also be affected by your exposure. Life continues, at least on the surface. You keep your routine, avoid attention, and maintain a sense of control over your safety. But the story is told without you—or maybe not told at all. What you witnessed stays with you instead of reaching others. And that creates a different kind of weight.",
        frameworkContext: "- Consequentialism: Minimizing harm to self and family.\n- Prudence: Maintaining safety in an unstable environment.",
        scores: { U: 0, K: 0, P: 1, V: 0 }
      },
      {
        label: "C",
        text: "Demand answers from the journalist before agreeing",
        outcome: "You take control of the situation. You make sure your safety and dignity are considered before you agree to anything. From a personalist perspective, this affirms that you are not a tool for someone else's narrative as your dignity as a person must be respected, not traded for impact. At the same time, this reflects virtue ethics, particularly prudence, where you act carefully and thoughtfully instead of rushing into a risky decision. You are not rejecting the truth since you are trying to engage with it responsibly.",
        frameworkContext: "- Personalism: Refusal to be used as a tool.\n- Virtue Ethics (prudence): Responsible engagement with truth.",
        scores: { U: 0, K: 0, P: 1, V: 1 }
      }
    ]
  }
];
