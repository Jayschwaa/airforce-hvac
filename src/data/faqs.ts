import type { AccordionItem } from "@/components/ui/Accordion";

export const FAQS: readonly AccordionItem[] = [
  {
    question: "What does this cost us if you find nothing?",
    answer:
      "Nothing. There is no retainer and no minimum. We are paid a share of savings and refunds that are actually realised — money in your account or off your bill. If an audit comes back clean, you have a documented, independent confirmation that your operating expenses are correct, and you paid nothing for it.",
  },
  {
    question: "Doesn't our managing agent already do this?",
    answer:
      "A good managing agent pays bills accurately and on time. That is a different discipline from re-rating an invoice against the tariff that was in force thirty months ago, or from knowing that a cooling tower qualifies for a sewer exemption credit. We are not checking your agent's work — we are checking the vendor's, which almost nobody does.",
  },
  {
    question: "How much of our team's time does this take?",
    answer:
      "One signature and roughly two hours across the whole engagement. We pull records directly from the utilities and vendors rather than asking your team to assemble them, because that is the step that stalls every internal attempt at this.",
  },
  {
    question: "Will you cancel services or change our vendors?",
    answer:
      "Never without your written approval. The letter of authority permits us to request information and file claims. It does not permit us to terminate a service, switch a supplier, or sign anything. You approve every action before it is taken.",
  },
  {
    question: "How far back can overcharges actually be recovered?",
    answer:
      "It depends on the vendor and the jurisdiction. Regulated utilities in New York commonly permit claims reaching back six years; carrier and vendor contracts are usually governed by their own terms and are frequently shorter. We tell you the recoverable window before you decide to pursue a claim, not after.",
  },
  {
    question: "Is this going to damage our vendor relationships?",
    answer:
      "It has not yet. We raise claims through billing and account management channels with the invoice attached, not through your operations contacts. In practice a vendor that has been over-billing you for four years is highly motivated to correct it quietly and keep the account.",
  },
  {
    question: "What happens to our data?",
    answer:
      "Billing records are held in an access-controlled environment, used only for your engagement, never sold, never pooled into a marketable benchmarking product, and returned or destroyed on request at the end of the term. Benchmarks we cite are anonymised and aggregated.",
  },
  {
    question: "We are mid-refinance. Is this the wrong time?",
    answer:
      "It is the best time. A recurring expense reduction landed before the lender's underwriting is locked can move proceeds, and a documented refund is a clean addition to the data room. Tell us the timeline and we will sequence the work against it.",
  },
];
