export const storyline1 = [
  {
    id: "ch1",
    title: "Chapter 1: THE FOOTAGE",
    narrative: "Late at night, a message from an unknown number, with no name and no context sent you a video. As you press play: A residential area—damaged. Civilians injured. The camera shakes as the person filming whispers, 'They bombed us… they bombed us.'\n\nThen a second message appears: 'Please. Show the world.' You check the file and realize the Metadata is still intact. If you publish this, authorities could trace the source. While reflecting about what you just witnessed on the screen, doing your job to report this casualty might come at the cost of someone else's safety.",
    choices: [
      {
        label: "A",
        text: "Publish the footage",
        outcome: "You decide to publish the footage, telling yourself that it is the right thing to do because as a journalist, your responsibility is to share the truth no matter how difficult it may be. Within hours, the video spreads across platforms faster than you expected, and international outlets begin picking it up and using it in their reports, turning what was once just a single file sent to you into something widely seen and difficult to deny. For a moment, it feels like your decision mattered, like the truth is finally being recognized. But a few days later, you come across a brief report that someone has been arrested. There are no names, no details, nothing that directly connects it to you, and yet you find yourself reading it over and over, unable to move on from the possibility that it might have been the same person who trusted you enough to send that video.",
        frameworkContext: "- Utilitarianism: The footage exposes violence and raises global awareness, potentially preventing further harm. However, it directly endangers the source. The decision maximizes broader impact but sacrifices individual safety.\n- Kantian Ethics: You fulfilled your duty to truth. The truth was told regardless of the consequences. However, if your action treated the source merely as a means to expose injustice, it raises tension within Kant's principle.\n- Personalism: You gave voice to victims, affirming their dignity. But if the source's life was put at risk without full protection, their dignity may also have been compromised.",
        scores: { U: 1, K: 1, P: 1, V: 0 }
      },
      {
        label: "B",
        text: "Do not publish",
        outcome: "You decide not to publish the footage and keep it to yourself, convincing yourself that it is the safer choice, that at least this way no one gets hurt because of you. The video stays with you, unseen, unverified, and unshared, sitting quietly in your files as if it never existed at all. As a journalist, you know that your duty is to seek and report the truth, that the public has a right to know what is happening beyond what they are being told. By choosing not to publish, you protected one person, but you also withheld something that could have mattered to many more. You tell yourself that minimizing harm is the most responsible decision, yet you cannot ignore that staying silent allows a larger harm to continue unchecked, nor can you escape the thought that in choosing safety, you may have failed a duty.",
        frameworkContext: "- Utilitarianism: You prevent immediate harm to the source, but allow a larger harm which is the erasure of truth and continued violence without accountability.\n- Kantian Ethics: You fail in the duty to truth. Silence, in this case, becomes a form of complicity.\n- Personalism: You protect one person's safety, but deny recognition to the victims in the footage. Their suffering remains unseen, their dignity unacknowledged.",
        scores: { U: 0, K: 0, P: 1, V: 0 }
      }
    ]
  },
  {
    id: "ch2",
    title: "Chapter 2: THE BLACKOUT",
    narrative: "The internet shuts down without warning. You cannot send messages, videos won't load, no communication. Rumors spread that some journalists are bypassing restrictions using illegal satellite tools and other systems. If you try, you risk being tracked.",
    choices: [
      {
        label: "A",
        text: "Bypass the blackout",
        outcome: "You find a way through contacts and risk, using unofficial or restricted methods to send your reports out. Your stories begin appearing internationally again, meaning what is happening is no longer contained within the country. Your reporting brings hidden events to light, making them visible beyond the country's borders. However, this comes at a cost. The moment your device glitches and you notice signs of unknown access, it suggests surveillance. By bypassing restrictions, you have made yourself visible, and visibility in this context can lead to tracking, interrogation, or arrest.",
        frameworkContext: "- Utilitarianism: You restore the flow of truth, benefiting many. But you increase the risk to yourself, possibly limiting your future ability to help.\n- Kantian Ethics: You uphold your duty to inform and resist censorship. The legality of the act does not override the moral duty.\n- Personalism: You affirm the right of persons to communicate truth and remain connected. You resist a system that reduces people to silence.",
        scores: { U: 1, K: 1, P: 1, V: 0 }
      },
      {
        label: "B",
        text: "Comply with the blackout",
        outcome: "You stop trying to send information out. Days turn into weeks, and slowly, state media becomes the only source left. Without alternative voices, their version of events begins to dominate, not because it is necessarily true, but because there is nothing else to challenge it. What continues to happen on the ground remains unseen beyond the borders, and without any form of documentation reaching the outside world, it becomes easier for reality to be denied, distorted, or simply ignored.",
        frameworkContext: "- Utilitarianism: You preserve your safety but allow misinformation to dominate, causing wider harm.\n- Kantian Ethics: You fail to act against injustice. Silence here contradicts duty.\n- Personalism: You allow a system that suppresses human voices to operate unchallenged, diminishing collective dignity.",
        scores: { U: 0, K: 0, P: 0, V: 0 }
      }
    ]
  },
  {
    id: "ch3",
    title: "Chapter 3: THE WARNING",
    narrative: "You receive a warning: 'We are aware of your activities,' from government authorities. You cannot help but think of other journalists who were detained for doing exactly what you are doing now—people who once believed they were simply doing their job until they were no longer able to continue it. Their stories stay with you, especially now that the similarities between their situation and yours feel far too close.",
    choices: [
      {
        label: "A",
        text: "Continue independent reporting",
        outcome: "You keep going. However, you are being followed at every turn. You need to avoid certain streets, which reduces the quality of your real-time reporting.",
        frameworkContext: "- Utilitarianism: Your work may inspire resistance and awareness, but the risk of being silenced entirely could reduce long-term impact.\n- Kantian Ethics: You remain committed to truth as a duty, regardless of personal cost.\n- Personalism: You defend your freedom and dignity as a person, refusing to be reduced to fear.",
        scores: { U: 1, K: 1, P: 1, V: 1 }
      },
      {
        label: "B",
        text: "Align with authorities",
        outcome: "You choose to keep going. After the warning, nothing more is said, but you begin to feel watched in everything you do. Each time you go out to gather information, you notice familiar faces appearing too often, the same vehicles parked near where you live, and your communication devices glitching at odd moments. At first, you try to dismiss it, telling yourself it's nothing, but you have to become hyper-aware of your surroundings as they follow you home, into your work, and may even put your family members, who aren't involved in your line of work, at risk.\n\nYou find yourself hesitating, second-guessing where to go and who to approach, as places that once gave you the most insight now feel like risks you can't fully take. You still want to shed light on the truth, but you are increasingly tempted to avoid certain areas, and people begin to hesitate to speak, slowly understanding the danger of being seen with you.\n\nYou continue reporting, but the quality of your data gathering is already compromised long before any direct consequence takes place, and over time, your comfort and even your quality of life begin to deteriorate.",
        frameworkContext: "- Utilitarianism: You maintain stability and continued output, but contribute to misinformation.\n- Kantian Ethics: You compromise truth. This violates duty.\n- Personalism: You begin treating your audience as a means—shaping reality rather than respecting their right to truth.",
        scores: { U: 0, K: 0, P: 0, V: 0 }
      }
    ]
  },
  {
    id: "ch4",
    title: "Chapter 4: ERASURE",
    narrative: "You notice it gradually: Posts vanish, videos disappear, entire documentation of events are gone. You assume it was taken down, buried, or simply lost in the flood of information. But then it keeps happening. More posts started to disappear, videos vanished without explanation, and entire accounts went silent overnight. What once felt like a continuous stream of events slowly turns into gaps, as if pieces of reality are being removed one by one.\n\nWhat is happening is being erased.\n\nBut you as a journalist still have the copies. Files you saved without thinking now hold moments that no longer exist anywhere else. Footage that once circulated openly now survives only with you, unacknowledged and unseen, as if it never happened at all.\n\nYou are left holding evidence of events that officially do not exist.",
    choices: [
      {
        label: "A",
        text: "Preserve the evidence",
        outcome: "The more you keep, the more dangerous it becomes. This is no longer just documentation—it is evidence, and evidence is not something they ignore. If authorities were to discover what you have, it would not be seen as part of your work, but as something you were never meant to hold. Your credibility could be stripped away, your access revoked, your career ended without explanation, as if it never existed to begin with. The data you keep could be turned against you, reframed as involvement, as participation, as something far more serious than simply preserving the truth.\n\nAnd it would not stop there. Once you are seen as someone who knows too much, the consequences no longer follow any clear rules. Surveillance turns constant and the line between questioning and punishment begins to disappear. The more you preserve, the more you understand that what you are holding is not just the truth, but something that could cost you everything—even your life.",
        frameworkContext: "- Utilitarianism: You protect truth for future justice, even if impact is delayed.\n- Kantian Ethics: Preserving truth aligns with duty.\n- Personalism: You safeguard the dignity of victims by ensuring they are not erased.",
        scores: { U: 1, K: 1, P: 1, V: 1 }
      },
      {
        label: "B",
        text: "Let it be erased",
        outcome: "You delete the files, telling yourself it is the safer choice, and in many ways, it is. The risk attached to you lessens, and your life becomes more manageable, more stable, more comfortable. Nothing can be traced back to you, and there is nothing left that can be used against you.\n\nHowever, this decision reflects a deeper ethical compromise. By choosing safety over truth, you step away from your role as a journalist, whose responsibility is to report reality as it is, even when it is difficult or dangerous. Instead of bringing light to what has been erased, you allow that erasure to continue. From a virtue ethics perspective, this choice reflects a lack of moral courage and integrity. From a personalism perspective, this decision compromises the dignity of the people involved. Their suffering remains unacknowledged, and they are deprived of a voice.",
        frameworkContext: "- Utilitarianism: Short-term safety, long-term loss of truth and justice.\n- Kantian Ethics: Failure to uphold truth.\n- Personalism: Victims lose recognition. Their existence is denied.",
        scores: { U: 0, K: 0, P: 0, V: 0 }
      }
    ]
  },
  {
    id: "ch5",
    title: "Chapter 5: PRIVILEGED ACCESS",
    narrative: "An offer is made. It is not presented as a threat, but as an opportunity. You are given official access, protection, and the kind of security that has become rare in a time of war. Along with it comes a promotion, a salary increase, and privileges that extend beyond your work—ensuring not only your safety, but also a more stable and comfortable life for your family in the midst of uncertainty.\n\nAll you have to do is cooperate. Nothing is explicitly demanded, but the expectation is clear. Your reporting would no longer exist entirely on your own terms, shaped instead by what is allowed, what is approved, and what government authorities consider safe to publish.",
    choices: [
      {
        label: "A",
        text: "Reject the offer",
        outcome: "You choose to turn it down, knowing that it means giving up not just access and protection, but the possibility of a stable life for yourself and your family. In choosing to shed light on the truth, you also choose a life that is far from comfortable. Every day becomes uncertain. You find yourself constantly trying to make ends meet, chasing what often feels impossible just to survive and provide for those who depend on you.\n\nYour work demands more than just courage—it demands resourcefulness. You have to find ways to continue reporting with limited equipment, replacing tools when they fail, and adapting to whatever conditions you are placed in. Staying in one place is no longer an option. You move when you have to, relocate when it becomes unsafe, and rebuild your routine again and again just to keep going.",
        frameworkContext: "- Kantian Duty Ethics: You continue reporting honestly even if it harms your own comfort or safety. Truth-telling is a duty that should not be compromised.\n- Personalism: You ensure that people affected by the conflict are seen and heard, respecting their dignity.\n- Virtue Ethics: This decision reflects moral virtues, especially courage and integrity, despite fear and hardship.",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      },
      {
        label: "B",
        text: "Accept the offer",
        outcome: "You choose to accept what is being offered, and with it comes immediate change. Your work becomes faster, your reach expands, and your visibility grows. Everything you once struggled to secure is now provided for you—equipment, access to information, and a steady flow of content that allows you to report with ease. Your life becomes stable, even comfortable.\n\nBeyond your work, the benefits extend further. Your family is safe. Your financial situation improves. You are given a level of security and privilege that few can afford during a time of war. All you have to do is align your reporting with what the government wants to convey.",
        frameworkContext: "- Utilitarianism: Wider reach, but compromised truth.\n- Kantian Ethics: Deception is morally wrong.\n- Personalism: Audience becomes a means, not an end.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      }
    ]
  },
  {
    id: "ch6",
    title: "Chapter 6: GLOBAL ATTENTION",
    narrative: "The world is watching now. Your stories have begun to travel beyond borders. International media picks up fragments of your work, amplifying them, reshaping them. What was once local is now global.\n\nBut with that attention comes expectation. They do not just want information. They want clarity. They want a version of events that is easy to understand, something that fits into a familiar structure. They begin to look for clear sides, asking who is in the right and who is in the wrong, reducing a complex reality into something that can be explained in a headline.",
    choices: [
      {
        label: "A",
        text: "Stay authentic",
        outcome: "You choose to remain truthful in your reporting, presenting events as they are—complex, layered, and often difficult to fully grasp. You refuse to simplify what you know cannot be reduced without losing meaning, keeping your work grounded in reality even when it demands more from your audience.\n\nHowever, this choice begins to affect your position more than you expected. Your stories do not travel as far and are often overlooked in favor of narratives that are easier to consume. Within your workplace, you are seen as difficult, someone who does not adapt, someone who refuses to play by the expectations of the industry. Promotion passes you by, and you begin to feel the distance between you and the career you once hoped to build.",
        frameworkContext: "- Kantian Ethics: Aligns with duty to truth.\n- Personalism: Respects reality and human dignity.\n- Virtue Ethics: Your decision reflects your character as a journalist.",
        scores: { U: 0, K: 1, P: 1, V: 1 }
      },
      {
        label: "B",
        text: "Shape the narrative",
        outcome: "You choose to simplify your reporting, presenting events in a way that is easier to understand and more appealing to a global audience. Your stories begin to gain traction almost immediately, spreading quickly across platforms. Within your workplace, you are recognized and commended. Your editors begin to favor your work, seeing its impact and reach. Even government officials begin to take interest in your work, opening doors for collaboration.\n\nHowever, minority voices begin to disappear from your reporting. Their side of the story is no longer heard. In doing so, their dignity is no longer honored, and their reality is replaced by a version that is easier to grasp or accept. Those portrayed as 'opponents' face hostility, as the simplified version of events leaves no room for understanding or nuance.",
        frameworkContext: "- Utilitarianism: May justify if awareness increases, but at the cost of truth and marginalized dignity.",
        scores: { U: 1, K: 0, P: 0, V: 0 }
      }
    ]
  }
];
