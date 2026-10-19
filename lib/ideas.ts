export const topics = ["Decisions", "Craft", "Product", "Attention"] as const;

export type Topic = (typeof topics)[number];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Idea = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  date: string;
  topic: Topic;
  minutes: number;
  blocks: Block[];
};

export const ideas: Idea[] = [
  {
    slug: "name-the-constraint",
    number: "05",
    title: "Name the constraint out loud",
    dek: "A stuck project is rarely short on ideas. It is short on a limit everyone has agreed to keep.",
    date: "2026-10-19",
    topic: "Decisions",
    minutes: 4,
    blocks: [
      {
        type: "p",
        text: "When a piece of work drags, the usual remedy is another option: a tool, a meeting, a rewrite of the brief. The work rarely needs another option. It needs a sentence that says what is not allowed to change.",
      },
      {
        type: "p",
        text: "A constraint is useful only when it is specific enough to disappoint someone. “Move fast” is a mood. “This ships on Friday with the three screens already designed, and we will not add a fourth” is a constraint. You can argue with it. You can plan around it. You cannot hide inside it.",
      },
      {
        type: "h2",
        text: "Try it on the next fuzzy task",
      },
      {
        type: "ol",
        items: [
          "Write one sentence that names the limit: time, scope, or quality. Pick one. Naming two at once is how a team pretends it has not chosen.",
          "Put that sentence where the work actually happens: the top of the ticket, the doc, the thread. A constraint that lives in someone’s head is only a preference.",
          "When a new idea appears, ask whether it fits inside the sentence. If it does not, park it as one line on a list. Reopen the sentence only when the constraint itself is wrong.",
        ],
      },
      {
        type: "p",
        text: "The point is not to become rigid. The point is to stop negotiating the same decision every afternoon. A named constraint makes the next yes, and the next no, cheap.",
      },
      {
        type: "quote",
        text: "If the limit cannot disappoint anyone, it is not a limit yet.",
      },
    ],
  },
  {
    slug: "smallest-true-version",
    number: "04",
    title: "Ship the smallest true version",
    dek: "A small release is not a sketch of the real thing. It is the real thing, with the extra rooms still unbuilt.",
    date: "2026-10-16",
    topic: "Product",
    minutes: 5,
    blocks: [
      {
        type: "p",
        text: "People say “minimum viable product” and then cut until nothing true remains: a landing page that promises a product, a demo that only the builder can click, a form that saves nowhere. That is not a small version. That is a poster.",
      },
      {
        type: "p",
        text: "The smallest true version is the narrowest path a real person can walk from start to finish. One job. One user. One result they would notice if it failed. Everything else can wait, including the parts that make the product feel finished.",
      },
      {
        type: "h2",
        text: "How to find the path",
      },
      {
        type: "p",
        text: "Write the outcome in a single line: who does what, and what changes for them. Then list every step between the start and that change. Cross out any step that does not move them. The steps that remain are the release. If the list is still long, the outcome is two outcomes wearing one coat. Split it.",
      },
      {
        type: "p",
        text: "A useful test: could you sit beside someone and watch them finish, without narrating? If you have to explain the missing pieces, the version is still a tour, not a product.",
      },
      {
        type: "quote",
        text: "Cut rooms, not the hallway. The hallway is the product.",
      },
    ],
  },
  {
    slug: "decision-before-the-meeting",
    number: "03",
    title: "Write the decision before the meeting",
    dek: "A meeting that opens with a blank page will spend its hour discovering what the question was.",
    date: "2026-10-13",
    topic: "Decisions",
    minutes: 4,
    blocks: [
      {
        type: "p",
        text: "Most meetings are asked to do two jobs at once: figure out what is being decided, and decide it. They do the first job slowly and the second job not at all. People leave with notes and the same open question.",
      },
      {
        type: "p",
        text: "Write the decision in advance, in the form of a proposal someone could reject. “We will pause the redesign and ship the billing fix this week.” Not “let’s discuss the roadmap.” A proposal gives the room something to push against. A topic gives the room permission to wander.",
      },
      {
        type: "h2",
        text: "A page is enough",
      },
      {
        type: "ol",
        items: [
          "The decision, in one sentence, already phrased as a choice.",
          "The constraint it respects, so people can see what you refused to trade away.",
          "What would change your mind. If nothing would, cancel the meeting and send the sentence.",
        ],
      },
      {
        type: "p",
        text: "Send it before anyone joins. The meeting then has a simpler job: amend the sentence, accept it, or replace it with a better one. That is a decision. An hour of context is not.",
      },
    ],
  },
  {
    slug: "one-line-backlog",
    number: "02",
    title: "Keep the backlog to one line each",
    dek: "If an idea needs a paragraph to be stored, it is already a project, and projects should be few.",
    date: "2026-10-09",
    topic: "Craft",
    minutes: 4,
    blocks: [
      {
        type: "p",
        text: "A backlog grows because capture is easy and commitment is not. Each item arrives with a title, a description, three tags, and a priority that meant something on the day it was typed. Six weeks later the list is a museum. Nobody trusts it enough to delete from it, so new work starts in a side document.",
      },
      {
        type: "p",
        text: "Store ideas as one line, in one place, in the words you would say out loud. “Let a reader jump from an idea to the desk it belongs to.” If you cannot say it in one line, you do not understand it yet, and storing a longer version will not create the understanding later.",
      },
      {
        type: "h2",
        text: "Once a week, touch the list",
      },
      {
        type: "p",
        text: "Read every line. Promote two into real work, with a constraint and a true version small enough to finish. Delete the lines that no longer tug. Leave the rest alone. A backlog is a waiting room, not a second job.",
      },
      {
        type: "quote",
        text: "The health of a list is how calmly you can throw a line away.",
      },
    ],
  },
  {
    slug: "an-hour-without-tools",
    number: "01",
    title: "Spend an hour without a new tool",
    dek: "The search for a better system is often a way to avoid the work the current system already allows.",
    date: "2026-10-06",
    topic: "Attention",
    minutes: 3,
    blocks: [
      {
        type: "p",
        text: "There is a particular afternoon shape: the task is clear, the next step is slightly unpleasant, and a tool you have not tried yet promises to make the unpleasant part orderly. You spend the hour comparing, signing up, and arranging. The task is still there, now with a new tab beside it.",
      },
      {
        type: "p",
        text: "This is not an argument for primitive software. It is an argument for finishing one pass with the tool already open. Pick the hour before you pick the upgrade. Write in the doc you have. Publish with the host you have. Sketch on the paper already on the desk.",
      },
      {
        type: "p",
        text: "At the end of the hour, you will know whether the tool was the obstacle. Usually it was not. The obstacle was the first ugly paragraph, the first incomplete page, the first version that a stranger could misunderstand. Those only improve by existing.",
      },
      {
        type: "quote",
        text: "Switch tools after the work has shown you the seam. Not before.",
      },
    ],
  },
];

export function getIdea(slug: string) {
  return ideas.find((idea) => idea.slug === slug);
}

export function ideasByTopic(topic: string | undefined) {
  if (!topic) return ideas;
  const match = topics.find((item) => item.toLowerCase() === topic.toLowerCase());
  if (!match) return ideas;
  return ideas.filter((idea) => idea.topic === match);
}
