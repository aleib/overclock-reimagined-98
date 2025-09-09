export const content = {
  hero: {
    headline: "Delegate your marketing busywork to AI",
    subhead: "Overclock gives you a team of AI agents you can trust. Describe what you need in plain English and our agents handle it in the background—reliably, reviewed, and under your control.",
    primaryCTA: "Get Early Access",
    secondaryCTA: "Book a Setup Call",
    supportCopy: "Invite-only during paid beta. Starts at $29/month. Slack‑native. No code."
  },
  
  problemFraming: {
    headline: "You're doing too much low‑value work.",
    description: "Most marketers never get to the strategic work because they're buried in repetitive tasks. Builders and flowcharts don't help—you want the outcome, not a second job as a workflow engineer."
  },

  whatOverclockDoes: {
    headline: "An AI teammate for repetitive marketing work. Delegate responsibilities, not tasks.",
    description: "Say what you need. Overclock creates a plain‑English Playbook and a team of agents to handle it, forever. Agents review each other's work, learn from your feedback, and keep you in control with simple approvals.",
    outcomes: [
      "Complete mental release from grunt work",
      "Fewer tabs and tools to babysit", 
      "Signal‑only updates, no spam",
      "Outputs you can trust because we show the work"
    ]
  },

  skillPacks: {
    headline: "Skill Packs (delegable responsibilities)",
    packs: [
      {
        title: "Competitor Intelligence",
        items: [
          "Watch competitor homepages, pricing, and messaging",
          "Track Product Hunt launches and new threats", 
          "Monitor social updates and pull only the signal into Slack"
        ]
      },
      {
        title: "Social and Content",
        items: [
          "Repurpose blog posts into high‑performing LinkedIn posts",
          "Scan Reddit/X and call transcripts for fresh content ideas",
          "Weekly engagement analysis with coaching and next steps"
        ]
      },
      {
        title: "Marketing Ops", 
        items: [
          "Compile weekly KPIs from all platforms into one Slack summary",
          "Turn commit messages into a polished changelog",
          "Summarize customer calls and route insights to the right people"
        ]
      },
      {
        title: "Lead Intelligence",
        items: [
          "Enrich inbound leads automatically",
          "Track job changes at target accounts", 
          "Surface newly funded startups that match your ICP"
        ]
      }
    ]
  }
} as const;

export type Content = typeof content;