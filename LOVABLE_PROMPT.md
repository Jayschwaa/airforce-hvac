# Upside — Lovable build prompts

Send these **in order**, as separate messages. Prompt 1 establishes the design
system and the homepage; each later prompt adds one page and depends on
Prompt 1 having run. Don't paste them all at once — Lovable produces
noticeably better results when the foundation is locked before pages are added.

---

## PROMPT 1 — Foundation, layout & homepage

Build a marketing site for **Upside**, an operating-expense recovery firm for
institutional real-estate portfolios. Use React + Vite + Tailwind + shadcn/ui.
Do not use placeholder or lorem ipsum text anywhere — all copy is supplied below
and should be used verbatim.

### What the business does

Upside audits what a real-estate portfolio already spends — electric and gas,
water and sewer, waste, telecom, vendor service contracts, insurance, payment
processing — finds billing errors and overcharges, recovers refunds for past
over-billing, and permanently reduces the go-forward run rate. Work is
contingency-based: no retainer, no capital outlay, no fee unless savings are
realised. Clients are institutional owners of large NYC portfolios.

### The single argument the whole site rests on

Do not write this as a discount or a rebate pitch. Write it as owner math:
a recovered dollar of recurring operating expense is a **permanent** dollar of
NOI, and a permanent dollar of NOI capitalises into asset value at the owner's
own cap rate. $1 of recurring opex removed = $18.18 of asset value at a 5.5 cap.
The tone is a firm an asset manager hires, not a vendor who cold-calls. Confident,
concrete, numerate. Never breathless, no exclamation marks, no "revolutionary".

### Brand

- Name: **Upside**
- Tagline: **Same Buildings. Better Returns.**
- Secondary line: *Found money for your bottom line.*
- Logo: no image file. Build it as markup — an inline SVG of three ascending
  rounded bars in gold (heights 10 / 16 / 24 in a 28×28 viewBox, rx 2, opacity
  0.45 / 0.72 / 1.0) followed by the word "Upside" in the display serif, weight
  900, tight letter-spacing (-0.035em).

### Colour system — follow the contrast rules exactly

Deep conservatory green + brass gold + warm cream. Add to the Tailwind theme:

```
forest: {
  50:'#f2f7f4', 100:'#deeae3', 200:'#b9d2c6', 300:'#87ae9c', 400:'#4a7764',
  500:'#2c5c42', 600:'#1c4530', 700:'#17402a', 800:'#10301f', 900:'#071a12'
}
gold: {
  50:'#fdf8ec', 100:'#faeecb', 200:'#f5dc98', 300:'#efc963', 400:'#e8b33c',
  500:'#d69c22', 600:'#b47c18', 700:'#8c5e15', 800:'#654316', 900:'#422c10'
}
cream: { 50:'#fefdfb', 100:'#fbf8f2', 200:'#f4efe3', 300:'#e9e1d0', 400:'#d8ccb4' }
```

These rules are non-negotiable, they are measured contrast ratios, not taste:

- Page background is `cream-100`. Body text is `forest-800`. Secondary prose is
  `forest-500` (7.29:1 on cream).
- **`gold-400` measures 1.81:1 on cream and must NEVER carry text or meaning on
  a light background.** It is for dark surfaces only. For gold-coloured text on
  a light background use `gold-700` (5.32:1).
- `forest-400` (4.82:1) is the lightest green that may carry small text.
  `forest-300` and lighter are decorative only — never type.
- Dark sections use `forest-900` (hero, calculator, chart, footer) or
  `forest-800` (CTA bands, cards sitting on dark).
- On dark surfaces, body text is `cream-100` at 55–70% opacity; headings are
  full-opacity `cream-100`; accents are `gold-400`.
- Primary button: `gold-400` background with `forest-900` text (9.4:1).

### Typography

- Display face: **Fraunces** (Google Fonts), weights 400/600/700/900. Used for
  all headings, the logo wordmark, and pull-quotes. It carries all the
  personality so everything else can stay plain.
- Body face: **Inter**, weights 400/500/600/700.
- **Every number on the site is set in Inter, never in Fraunces.** A display
  serif on a figure reads as decoration rather than data.
- Big standalone figures (stat values, calculator outputs) use default
  proportional figures. Only use `font-variant-numeric: tabular-nums` for
  columns of numbers that must align vertically — table rows, chart axis ticks,
  phone numbers.
- Headings: `font-black`, tracking `-0.03em`. H1 clamps roughly 2.75rem → 4.25rem.

### Global layout

**Top bar** (hidden below md): `forest-900`, 40px tall, small text.
Left: a gold dot then "No fee unless we find money · No capital expenditure, ever".
Centre: "New York City & the Northeast · Portfolios nationwide".
Right: phone `(212) 555-0148` with a phone icon.

**Header**: sticky, `cream-100`, 72px. Logo left. Centre nav: What We Recover,
How It Works, Who We Serve, Results, Contact. Right: a `forest-800` pill button
"Get your free analysis". On scroll past 16px, add a subtle bottom border and
switch the background to `cream-100/85` with backdrop blur. The active route
gets a 2px `gold-400` underline. Below lg, collapse to a hamburger that opens a
full-screen `forest-900` overlay with the nav items in Fraunces at text-3xl,
staggered in; lock body scroll and close on Escape.

**Footer**: `forest-900`. Three columns — brand + tagline + phone/email/address;
a Company link list; a "What we open" list of the eight recovery categories.
Bottom rule with the copyright and: "Fees are contingent on realised savings.
Nothing here is tax, legal or investment advice."

**Sticky mobile CTA**: below lg only, appears after 500px of scroll — a bar
fixed to the bottom with an outlined "Call" button and a `gold-400`
"Get your free analysis" button. Add a spacer element of the same height at the
end of the page so it never covers footer content.

### Homepage sections, in order

**1. Hero** — `forest-900` background, two columns.
Left: a small pill "OPERATING EXPENSE RECOVERY"; H1 "Same buildings." on one
line and "Better returns." below it in `gold-400`; then the paragraph:
"Your portfolio is overpaying on lines nobody has opened in years — tariffs,
sewer credits, dead circuits, escalating vendor contracts. We find it, we
recover it, and we hand the difference back to NOI."
Then in Fraunces bold italic: "Found money for your bottom line."
Two buttons: gold "Get your free analysis" and an outlined phone number.
Then three inline bullets: "No fee unless we find money", "No capital
expenditure, ever", "No equipment, no construction, no tenant disruption".

Right: a decorative mock utility statement card (`forest-800`, rounded-2xl,
`aria-hidden`). Header reads "STATEMENT · 24-MONTH REVIEW" over "1,240 units ·
9 buildings", with a gold "AUDITED" chip. Then five monospaced-feeling rows,
each a code, a description and an amount:
- `SC-9` General large — demand · $38,412.00
- `ADJ-04` Merchant function charge · $1,206.44
- `SWR-01` Sewer, 100% of metered intake · **$14,880.20 struck through, then
  $9,142.06 in gold** — this row is highlighted, code and description in full
  white/gold while the others are dimmed
- `GRT-02` Gross receipts tax · $2,940.18
- `TEL-11` Analog lines ×38 · $3,116.00
Footer of the card, **right-aligned**: "Never filed · 11 years".
Then a `gold-400` badge overlapping the card's bottom-LEFT corner, outside its
bounds: a check icon and "RECOVERED", "$612,000" large, and "+ $188K every year
after". The card footer must be right-aligned so this badge never covers it.

Critical: the column wrapping this card needs `min-w-0`, otherwise the grid
track inherits `min-width:auto`, the card forces the column to its own width,
and it gets clipped on narrow screens.

**2. KPI row** — on cream, four stat tiles. Each is a small uppercase label, a
large Inter semibold value that counts up once when scrolled into view, a small
gold sub-line, and a 12-point sparkline (2px stroke in a de-emphasis colour with
a gold dot on the final point). Respect `prefers-reduced-motion` by landing on
the final value immediately.
- Recovered for clients — $214M — "since 2009"
- Buildings analysed — 3,800+ — "across 41 states"
- Audits that find money — 91% — "of first-time engagements"
- Average NOI lift — 47 bps — "in year one"
Below the row, a small bordered notice: "**Sample figures.** The numbers on this
page illustrate how findings are reported and are not results from named
engagements."

**3. Client roster** — a `cream-200` band, centred label "WHO WE DO THIS FOR",
then six names in Fraunces with a small descriptor beneath each: Brookfield
Properties (Office & mixed-use portfolio); Tredway (Affordable & workforce
housing); Loews Hotels (Hospitality portfolio); The Tisch Family Portfolio
(100+ New York City buildings); New York Giants (Venue & training facilities);
Standard Communities (LIHTC & Section 8 assets).
Names only — **do not fetch or invent any company logos.** Put this behind a
`SHOW_NAMED_CLIENTS` boolean that falls back to unnamed descriptors like
"A global institutional owner-operator" when false.

**4. The cap-rate argument** — on cream, two columns.
Left heading: "You don't need another building." then, in `gold-700`,
"You need this one to earn more."
Paragraphs: "Acquiring NOI is expensive, slow and competitive. Recovering NOI
you are already generating — and quietly handing to a utility — costs you
nothing and takes ninety days." / "This is the entire argument. A recurring
expense reduction is not a rebate. It is a permanent change to the income
statement, and it capitalises into value at whatever cap rate you underwrite
the asset at."
Right: three cards with arrows between them —
"$1" / "of recurring opex removed" / "A billing error corrected once, then gone
for good." → "$1" / "of permanent NOI" / "It never comes back, so it underwrites
as permanent." → "$18.18" (in `gold-700`) / "of asset value at a 5.5 cap" /
"The same dollar, capitalised at your own exit assumption."

**5. The eight recovery categories** — heading "Eight lines nobody has looked at
in six years." with subtitle "We do not guess where the money is. These are the
categories that produce findings, in the order they usually produce them."
A 4-column grid (2 on tablet, 1 on mobile) built as hairline-separated cells
sharing one rounded border — use a 1px gap over a border-coloured background
rather than separate bordered cards. Each cell: a gold icon, the title in
Fraunces, a short description, and a gold-700 footer line "Typically X% of
annual spend" with a small arrow. Each links to `/what-we-recover#slug`.

1. **Electric & Gas** — "Rate class, demand, supply." — 6–18% of annual spend
2. **Water & Sewer** — "Sewer credits, meter faults, leak adjustments." — 8–22%
3. **Waste & Recycling** — "Right-sizing, frequency, surcharge creep." — 12–30%
4. **Telecom, Internet & Data** — "Circuits for rooms that no longer exist." — 15–35%
5. **Vendor Service Contracts** — "HVAC, elevator, life safety, janitorial." — 10–25%
6. **Property Insurance & Risk** — "Valuation, COPE data, loss-run hygiene." — 5–15% of annual premium
7. **Payment & Processing Fees** — "Interchange, platform fees, payroll." — 10–20% of annual fees
8. **Incentives & Compliance** — "Left-on-the-table programme dollars." — Programme-dependent

**6. The Upside Calculator** — `forest-900` section, the centrepiece. See the
dedicated spec in Prompt 2.

**7. Process teaser** — on cream, first three steps of the process (full list in
Prompt 4), each as a column with a top rule, a gold icon, a step number, the
title, a gold uppercase duration, and the body. Plus a link "See the full process".

**8. Testimonials** — `cream-200` band, three quotes, each with a gold quote
mark, the quote in Fraunces semibold, and an attribution rule beneath:
- "I assumed our bills were right because we had been paying them for nine
  years. That turns out to be the reason they were wrong." — Managing Director,
  Asset Management · Institutional office owner
- "We could not raise rents — the regulatory agreement does not allow it. This
  was the only lever left, and it moved coverage enough to matter." — VP of
  Operations · Affordable housing developer
- "The memo was written for an investment committee, not for an engineer. That
  is the first time I have been able to take a utility audit into a capital
  meeting." — Chief Financial Officer · Family-office real-estate portfolio

**9. Closing CTA band** — `forest-800`. "Start with one building." with body:
"Pick the asset you like least. We will audit it end to end, at our cost, and
show you what is in it. If there is nothing there, you will have an independent
confirmation that your opex is clean — and no invoice." Gold button + outlined
phone button. Make this a reusable component with overridable heading and body.

### Motion

A single reusable scroll-reveal wrapper: fade in and rise 18px, 0.6s,
`cubic-bezier(0.22,1,0.36,1)`, triggering once, with a small stagger between
siblings. Nothing parallaxes, nothing bounces. Honour `prefers-reduced-motion`
globally by reducing all animation and transition durations to near zero.

### Non-negotiable technical requirements

- Nothing may cause horizontal page scroll at 390px, 768px or 1440px. Any grid
  or flex child holding wide content needs `min-w-0`.
- Wide content (tables, the chart) scrolls inside its own container, never the body.
- Semantic headings in order, visible focus rings on every interactive element,
  `aria-current` on the active nav item, alt text or `aria-hidden` on all decoration.
- All copy and figures live in separate data files, not inline in components.

---

## PROMPT 2 — The Upside Calculator

Add an interactive calculator to the homepage on a `forest-900` background.
Heading "Run the math on your own portfolio." Subtitle: "Four inputs you
already know. The output is stated the way your investment committee states it —
recurring cash, one-time recovery, and the value that recurring cash creates at
your cap rate."

Left column, four sliders. Each shows a label, the live value in `gold-400` on
the right, the track filled gold to the left of the thumb and translucent cream
to the right, and a small hint beneath.

1. **Units in the portfolio** — 100 to 10,000, step 50, default 1,200.
   Hint: "Or keys, for hospitality. Use doors, not buildings."
2. **Controllable opex per unit** — $2,000 to $12,000/yr, step 100, default $4,200.
   Hint: "Utilities, waste, telecom, service contracts and insurance — the lines
   we can actually open. Excludes taxes, debt service and payroll."
3. **Assumed recovery rate** — 3% to 12%, step 0.5, default 7%.
   Hint: "Across audited portfolios this lands between 4% and 11%. 7% is the
   midpoint — leave it there unless you have a reason."
4. **Your cap rate** — 4% to 8%, step 0.25, default 5.50%.
   Hint: "Used only to translate recurring savings into asset value."

Right column, four output tiles, values compacted to `$X.XM` / `$XXXK`:

- `controllableOpex = units × opexPerUnit`
- **Recurring, every year** = `controllableOpex × recoveryRate`.
  Sub-line: "On {compact controllableOpex} of controllable opex"
- **One-time recovery** = `annualSaving × 1.4`.
  Sub-line: "Refunds and credits for prior over-billing"
- **Value created** = `annualSaving ÷ capRate` — this tile is filled `gold-400`
  with `forest-900` text, it is the punchline. Sub-line: "What {annual} of
  permanent NOI is worth at a {cap} cap"
- **Cash over a 7-year hold** = `annualSaving × 7 + oneTimeRecovery`.
  Sub-line: "Recurring savings plus the initial recovery"

Beneath the sliders, a bordered honesty note: "An estimate built from midpoints,
not a quote. Your actual findings depend on tariffs, contract terms and how long
the errors have been running. The audit is what produces a number you can
underwrite."

Beneath the outputs, a bordered panel: "Cost to find out: nothing." / "We are
paid from the savings we land. If the audit comes back clean, you have an
independent confirmation that your opex is correct — and no invoice." with a
gold "Start with one building" button.

Sliders must be real `<input type="range">` with labels and `aria-describedby`
pointing at the hints, keyboard operable, with a visible focus ring.

---

## PROMPT 3 — Results page & the compounding chart

Route `/results`. Dark `forest-900` header section: label "RESULTS", heading
"Findings, reported the way you underwrite.", subtitle "Not a spreadsheet of
anomalies. Every engagement closes with four numbers: what we recovered, what we
removed permanently, what that does to NOI, and what it is worth at your cap
rate." Repeat the four KPI tiles here in their light-on-dark variant.

### Case studies

Three cards, each split: narrative on the left, a "THE FOUR NUMBERS" panel on
the right. Each has a dark sector chip, a scale line, a Fraunces headline, then
"THE SITUATION" and "WHAT WE DID". In the numbers panel the final metric is
`gold-700`, the rest `forest-800`.

**1. Affordable Housing** — 1,240 units · 9 buildings · Bronx & Upper Manhattan
"A sewer credit nobody had ever filed"
Situation: "Nine pre-war buildings with central cooling towers, all billed for
sewer on 100% of metered water intake. Tower evaporation had never been
deducted — in one case for eleven years."
What we did: "We metered the make-up lines, filed evaporation-credit
applications across all nine assets, and reconstructed the recoverable
back-billing window. Two buildings also turned out to be on estimated reads
behind a dead AMR transmitter."
Numbers: One-time refund $612,000 · Annual run-rate reduction $188,000 ·
NOI lift +61 bps · Value created at a 5.5 cap $3.4M

**2. Hospitality** — 4 full-service hotels · 1,830 keys · Northeast
"Peak nights were pricing all 365"
Situation: "Demand charges at all four properties were anchored to ratchets set
during a single sold-out stretch two summers earlier. The rate structure had
never been revisited against actual load."
What we did: "Interval data showed sustained demand well below the ratchet at
three of four hotels. We petitioned for reclassification, reset the ratchets,
and separately found 38 active POTS lines billed for elevators and fax lines cut
over in 2019."
Numbers: $247,000 · $431,000 · +38 bps · $6.2M at a 7 cap

**3. Office & Mixed-Use** — 2.1M sq ft · 6 assets · Manhattan
"Same vendor, six buildings, six different rates"
Situation: "A portfolio-wide elevator maintenance agreement had been assembled
from six separately negotiated legacy contracts, each with its own escalator.
Nobody had ever compared them side by side."
What we did: "Benchmarking the six contracts against each other — and against
scope actually delivered — showed a 31% spread on equivalent service. We
consolidated to the best terms in the book and removed inspection frequencies
above code requirement."
Numbers: $96,000 · $524,000 · +29 bps · $8.7M at a 6 cap

### The compounding chart

A `forest-900` section, two columns. Left: label "THE PART PEOPLE MISS", heading
"A finding is an annuity, not a cheque.", subtitle "Owners instinctively price a
recovery as a one-time event. It is not. Once a tariff is corrected or a
contract re-cut, the saving repeats for as long as you hold the asset — and then
capitalises into the exit on top." Plus: "That is why this work underwrites so
unusually well. There is no capital at risk, no execution risk, and no ramp. The
only question is whether the money is there — and it is, in nine out of ten
first-time audits."

Right: a **hand-built inline SVG stacked column chart** — do not add a charting
library for this.

- Title: "One $431K finding, held for seven years"
- Seven columns, one per year. Data in thousands, cumulative:
  431 / 862 / 1293 / 1724 / 2155 / 2586 / 3017. Each year adds 431.
- Each column is stacked: a lower segment in `gold-600` for everything banked in
  earlier years, and an upper segment in `gold-400` for that year's addition.
  Year 1 has only the upper segment.
- Leave a **2px gap between the two stacked segments** so they read as separate.
- Round only the **top two corners** of the top segment, radius 4px. The column
  is anchored flat to the baseline.
- Y axis 0 to 3200, gridlines at 0/800/1600/2400/3200, labelled $0, $0.8M,
  $1.6M, $2.4M, $3.2M in tabular figures at ~40% opacity. Gridlines must be
  recessive — cream at about 10% opacity.
- **Direct-label only the final column** ($3.02M) — never every column.
- Hover or keyboard-focus a column: it stays full opacity while the others drop
  to 55%, its x-axis label goes bold, and it gains its own direct label.
  Give each column a transparent hit target spanning the full band, wider than
  the mark itself, and make it focusable with an aria-label.
- **Put the hover readout in reserved space ABOVE the plot, not floating over
  it.** A tooltip layered on the chart covers the marks and the top axis label.
  The readout sits on the same row as the legend, aligned right, showing
  "Year N" over "$X,XXXK saved to date (+$431K)". It defaults to year 7 when
  nothing is hovered, and the row has a fixed minimum height so nothing shifts.
- A legend is always present because there are two series: a `gold-400` swatch
  "Saved this year" and a `gold-600` swatch "Saved in earlier years".
- Below the chart, a collapsible "View as a table" `<details>` showing year,
  saved that year, and cumulative — so the data is never colour-only.

This chart may only ever be rendered on a dark forest background. `gold-400` is
1.81:1 on cream and would fail contrast on a light surface; on `forest-900` the
two gold steps measure 9.4:1 and 5.0:1.

Close the page with the testimonials band and the CTA band.

---

## PROMPT 4 — How It Works page

Route `/how-it-works`. Dark header: label "HOW IT WORKS", heading "The hard part
is getting the records. So we do that part.", subtitle "Every owner has
considered doing this internally. It stalls in the same place every time —
nobody has thirty months of invoices from eleven vendors sitting in one folder.
We go and get them."

Then five steps as full-width stacked rows sharing one rounded container. Each
row: left side has a gold icon in a dark rounded square, the step number in
large light figures, and a gold uppercase duration; right side has the title,
the body, and a gold-ruled "Your effort:" line.

1. **You sign one letter of authority** — Day 1 · 30 minutes
   "A limited LOA lets us request records directly from your utilities, carriers
   and vendors. It authorises us to look and to ask questions. It does not
   authorise us to change, cancel or commit to anything on your behalf."
   Your effort: "One signature. A contact at the managing agent."
2. **We pull and rebuild 24–36 months** — Weeks 1–3
   "We gather the bills ourselves rather than asking your team to assemble them.
   Every invoice is re-rated line by line against the tariff, the contract and
   the meter data that were actually in force on that date."
   Your effort: "Nothing. This is the part that usually stalls — so we own it."
3. **You get a findings memo, priced in owner terms** — Day 30
   "Not a spreadsheet of anomalies. A memo that states the refund available, the
   annual run-rate reduction, the resulting NOI lift in basis points, and the
   implied change in asset value at your cap rate. Every claim is evidenced to
   the invoice."
   Your effort: "One hour to read it. You approve what we pursue."
4. **We file, argue and collect** — Months 2–9
   "Refund claims, tariff reclassifications, exemption filings, credit requests
   and vendor renegotiations — we run them to conclusion. Utilities push back;
   that is expected and it is our job, not yours."
   Your effort: "Countersign filings. Nothing else."
5. **We keep watching** — Ongoing
   "A corrected bill drifts back. Rates change, contracts auto-renew, meters
   fail, a new managing agent re-opens an old account. We monitor the accounts
   monthly so the savings you paid for stay in place."
   Your effort: "A quarterly summary in your inbox."

Then a `forest-800` section headed "We only get paid from money you weren't
going to get." with body: "No retainer, no capital outlay, no software to buy.
We take an agreed share of the savings and refunds we actually land — for a
defined term, then it is all yours." Alongside it, four bordered cards:
- **No fee unless we find money** — "We are paid a share of savings and refunds
  that are actually realised. Not identified — realised."
- **Two hours of your time** — "One signature, one hour reading the memo, and
  countersigning the filings. We do the rest."
- **You approve every action** — "The letter of authority lets us ask questions
  and file claims. It never lets us cancel, switch or commit."
- **Your data stays yours** — "Access-controlled, used only for your engagement,
  never sold, and destroyed on request at the end of the term."

Then an FAQ accordion (single-open, animated height, a plus icon that rotates
45° to a cross):

- **What does this cost us if you find nothing?** "Nothing. There is no retainer
  and no minimum. We are paid a share of savings and refunds that are actually
  realised — money in your account or off your bill. If an audit comes back
  clean, you have a documented, independent confirmation that your operating
  expenses are correct, and you paid nothing for it."
- **Doesn't our managing agent already do this?** "A good managing agent pays
  bills accurately and on time. That is a different discipline from re-rating an
  invoice against the tariff that was in force thirty months ago, or from
  knowing that a cooling tower qualifies for a sewer exemption credit. We are
  not checking your agent's work — we are checking the vendor's, which almost
  nobody does."
- **How much of our team's time does this take?** "One signature and roughly two
  hours across the whole engagement. We pull records directly from the utilities
  and vendors rather than asking your team to assemble them, because that is the
  step that stalls every internal attempt at this."
- **Will you cancel services or change our vendors?** "Never without your written
  approval. The letter of authority permits us to request information and file
  claims. It does not permit us to terminate a service, switch a supplier, or
  sign anything. You approve every action before it is taken."
- **How far back can overcharges actually be recovered?** "It depends on the
  vendor and the jurisdiction. Regulated utilities in New York commonly permit
  claims reaching back six years; carrier and vendor contracts are usually
  governed by their own terms and are frequently shorter. We tell you the
  recoverable window before you decide to pursue a claim, not after."
- **Is this going to damage our vendor relationships?** "It has not yet. We raise
  claims through billing and account management channels with the invoice
  attached, not through your operations contacts. In practice a vendor that has
  been over-billing you for four years is highly motivated to correct it quietly
  and keep the account."
- **What happens to our data?** "Billing records are held in an access-controlled
  environment, used only for your engagement, never sold, never pooled into a
  marketable benchmarking product, and returned or destroyed on request at the
  end of the term. Benchmarks we cite are anonymised and aggregated."
- **We are mid-refinance. Is this the wrong time?** "It is the best time. A
  recurring expense reduction landed before the lender's underwriting is locked
  can move proceeds, and a documented refund is a clean addition to the data
  room. Tell us the timeline and we will sequence the work against it."

---

## PROMPT 5 — What We Recover page

Route `/what-we-recover`. Dark header: label "WHAT WE RECOVER", heading "Every
line on the schedule, re-rated against what it should have been.", subtitle
"An audit is not a search for waste. It is a reconstruction: we re-price
twenty-four to thirty-six months of invoices against the tariff, contract and
meter data that were actually in force on each of those dates. Where the two
disagree, there is money."

Below it a sticky-feeling band of anchor pills, one per category. Then eight
alternating sections, each with `scroll-mt-24` and an id. Left: gold icon in a
dark square, an index number, the title, a one-line hook, and a gold pill
"Typically X% of annual spend". Right: "WHAT WE ACTUALLY FIND" over a bulleted
list with small gold bullet dots.

**1. Electric & Gas** — Hook: "The largest line on the schedule and the one most
often billed on the wrong tariff for years at a time."
- Buildings sitting on the wrong service classification — an SC-4 load billed on SC-9 terms, or the reverse
- Demand ratchets set by a single anomalous 15-minute interval and never reset
- Missing or lapsed utility sales-tax exemptions on residential accounts
- Supply contracts rolling to variable month-to-month rates after auto-expiry
- House meters carrying load that belongs to a submetered tenant
- Standby and reactive-power charges applied to buildings that no longer qualify

**2. Water & Sewer** — Hook: "You are billed for sewer on every gallon that
enters the building — including the gallons that never reach the sewer."
- No sewer-exemption credit filed for cooling-tower evaporation or irrigation
- Estimated reads standing in for a failed AMR transmitter across multiple cycles
- Leak-adjustment claims never filed after a documented repair
- Multi-Family Conservation Program placement that no longer beats metered billing
- Frontage-based billing left in place after a meter was installed
- Cross-billed accounts where a neighbouring lot's usage lands on your bill

**3. Waste & Recycling** — Hook: "Nobody renegotiates carting. The contract
quietly escalates and the pickups never get re-scoped."
- Container size and pickup frequency set years ago at a different occupancy
- Fuel, environmental and administrative surcharges compounding on the base rate
- Evergreen auto-renewal clauses with narrow cancellation windows
- Contamination fees charged without the required documentation
- Duplicate service at properties that changed managing agents

**4. Telecom, Internet & Data** — Hook: "The single most reliable source of pure
waste in a real-estate portfolio: services billed long after they were
disconnected."
- POTS lines and PRIs billed for elevators, alarms and fax machines that were cut over years ago
- Circuits still invoiced for suites, offices and construction trailers that are gone
- Bulk MDU agreements priced against an outdated door count
- Cellular pools with unused lines and unretired devices
- Early-termination and regulatory fees applied outside the contract terms

**5. Vendor Service Contracts** — Hook: "We benchmark what you are paying against
what the scope actually says — and against what your other buildings pay."
- Elevator maintenance contracts with CPI-plus escalators running unchecked
- Full-service coverage billed where the scope was reduced to inspection-only
- Fire alarm and sprinkler inspection billed at a frequency above code requirement
- The same vendor charging different rates at different assets in one portfolio
- Pest, landscaping and janitorial contracts renewing without a re-bid in 5+ years
- Repairs billed inside a scope already covered by the base contract

**6. Property Insurance & Risk** — Hook: "Premium follows the data the carrier
holds. When that data is wrong, you pay for a building you do not own."
- Replacement-cost valuations carried forward without reconciliation to the rent roll
- COPE data misstating construction class, sprinklering or roof age
- Loss runs carrying closed or subrogated claims that still price the renewal
- Premium allocation across a portfolio that no longer matches square footage
- Duplicate coverage between the master programme and asset-level policies

**7. Payment & Processing Fees** — Hook: "Rent-payment platforms and merchant
processors price on defaults. Defaults are rarely the right price."
- Interchange downgrades from mis-keyed transaction data
- Rent-payment platform fees benchmarked against portfolio volume, not per-door
- Payroll processing billed per-item at legacy headcount tiers
- Chargeback and PCI non-compliance fees assessed in error

**8. Incentives & Compliance** — Hook: "Recovery is not only about refunds. It is
also about the money already appropriated for your building."
- Con Edison and NYSERDA incentives never claimed on completed work
- Local Law 97 penalty exposure modelled and reduced before it prices in
- Utility sales-tax exemption certificates missing or expired
- ICAP, J-51 and 421-a benefit tracking that lapsed at a hand-off
- Demand-response revenue available on assets already capable of curtailment

End with a CTA band: "Not sure which line is the problem?" / "That is the normal
starting position, and it is fine. The audit is what tells you. Give us one
building and we will come back with a ranked list of what is wrong with it."

---

## PROMPT 6 — Who We Serve page

Route `/who-we-serve`. Dark header: label "WHO WE SERVE", heading "The same
errors. Very different consequences.", subtitle "A mis-filed sewer credit is
worth the same dollars in a hotel as in a LIHTC deal. What differs is what those
dollars do — cover a debt service ratio, protect a tenant escalation, or simply
drop to the bottom line."

Then the client roster band, then six sector sections. Each: left has a gold
icon, an index and the title; right has the thesis in Fraunces semibold followed
by a gold-bulleted list.

**1. Affordable & Workforce Housing** — Thesis: "When the revenue line is
regulated, operating expense is the only lever you control. Every dollar we take
out of opex is a dollar that flows straight to NOI — and a dollar that keeps a
deal covenant-compliant."
- DSCR relief without touching rents or the regulatory agreement
- Water and sewer is disproportionately large in older affordable stock — and disproportionately mis-billed
- Utility allowance analysis for tenant-paid versus owner-paid configurations
- Findings documented to a standard your lender, syndicator and agency reviewers accept
- Reserve pressure eased without drawing on replacement reserves

**2. Market-Rate Multifamily** — Thesis: "A recurring opex reduction is not a
one-time gain. It is a permanent change to the income statement that capitalises
into the exit — and it underwrites at your cap rate, not your discount rate."
- Portfolio-wide benchmarking that surfaces the outlier assets first
- Submetering and house-meter reconciliation across the stack
- Bulk internet and cable agreements re-priced to current door count
- Clean, auditable findings for the data room ahead of a refinance or sale

**3. Hotels & Hospitality** — Thesis: "A hotel runs every system, around the
clock, at variable occupancy. That combination produces the widest gap we see
between what a property is billed and what it actually consumed."
- Laundry, kitchen and pool loads driving sewer volume that never enters the sewer
- Demand charges set by peak-occupancy nights and then applied all year
- Guest-facing telecom, in-room entertainment and bandwidth contracts
- Vendor contracts across F&B, life safety and building services benchmarked as one book

**4. Office & Mixed-Use** — Thesis: "In a triple-net world, recovery cuts both
ways: you protect the landlord's share and you hand tenants a defensible, lower
escalation. That is a retention argument as much as a returns argument."
- Base-year and CAM escalation exposure reviewed alongside the underlying bills
- Tenant submeter reconciliation against house consumption
- Vacancy-adjusted service scopes for floors that are not occupied
- Local Law 97 exposure modelled before it prices into the asset

**5. Retail & Ground-Floor** — Thesis: "Small, numerous accounts are where
billing errors hide. Nobody audits a $900 monthly invoice — which is exactly why
it stays wrong for six years."
- High account counts audited in aggregate rather than one-off
- Merchant processing and interchange reviewed alongside utilities
- Waste and recycling right-sized per storefront, not per lease
- Percentage-rent and recovery clauses cross-checked against actual billing

**6. Stadiums, Arenas & Venues** — Thesis: "Event-driven load is the hardest
thing in real estate to bill correctly. A handful of peak days should not set the
rate structure for all 365."
- Event-day demand peaks isolated from base building load
- Curtailment and demand-response revenue on assets already capable of it
- Concessions, point-of-sale and connectivity contracts reviewed as one portfolio
- Seasonal and dark-period service scopes adjusted to actual use

CTA band: "Your asset class isn't on the list?" / "The method does not change. If
a building receives an invoice, that invoice can be wrong — and in our experience
it usually is. Tell us what you own."

---

## PROMPT 7 — Contact page

Route `/contact`. Dark header: label "CONTACT", heading "Start with one
building.", subtitle "Pick the asset you like least — the one where the numbers
have never quite made sense. We will audit it end to end at our cost. You will
know inside thirty days whether there is anything there."

Left, a form: Name and Company on one row; Email and Phone on the next;
Portfolio size and Asset type selects on the next; then a message textarea with
placeholder "A refinance timeline, a problem asset, a line item that has always
looked wrong to you…". Submit button reads "Request the free analysis".

- Portfolio size options: 1 building (a pilot) / 2–10 buildings / 11–50
  buildings / 51–100 buildings / 100+ buildings
- Asset type options: Affordable / workforce housing · Market-rate multifamily ·
  Hotels & hospitality · Office & mixed-use · Retail · Venues & entertainment ·
  Mixed portfolio
- Include a visually hidden honeypot field and silently drop submissions that fill it.
- On success, replace the form with a confirmation: a gold check in a circle,
  "Thank you — that's all we need to start.", and "We will come back within one
  business day with the letter of authority and a short list of the accounts we
  would like to pull first. No preparation needed on your end." Plus a link back
  to send another.
- Under the button: "No retainer, no obligation, and nothing is pulled until you
  sign the letter of authority. We do not sell or share your information."

Right column: a card with phone, email, office address and hours
(Mon–Fri, 8:30–6:00 ET, "Findings memos land within 30 days of the data pull."),
then a `forest-800` card headed "What happens next" listing the first three
process steps with their durations.

---

## PROMPT 8 — Final polish

- Add per-page titles and meta descriptions, Open Graph tags, a sitemap and
  robots, and `ProfessionalService` JSON-LD structured data.
- Favicon: a rounded `forest-800` square with the three ascending gold bars.
- Audit at 390px, 768px and 1440px and fix any horizontal overflow. Confirm
  nothing but intentionally-clipped decorative elements exceeds the viewport.
- Confirm keyboard navigation reaches every control, focus rings are visible on
  the dark sections as well as the light ones, and the chart columns are
  focusable.
- Confirm no console errors on any route.

### Do not invent these — leave them clearly marked as placeholders

- **Contact details.** Use `(212) 555-0148`, `hello@upsidenoi.com` and
  `61 Broadway, Suite 1400, New York, NY 10006`. The phone deliberately uses the
  555-01xx range reserved for fiction so nothing dials a real person.
- **Every figure on the site is illustrative.** Put them behind a single
  `FIGURES_ARE_ILLUSTRATIVE` flag that renders the "Sample figures" disclosure
  wherever they appear, so they can be swapped for audited numbers and the flag
  flipped off.
- **Client names need written permission before publication.** Keep the
  `SHOW_NAMED_CLIENTS` flag so the roster can fall back to unnamed descriptors.
- **Do not source, generate or embed any company logos** for the named clients.
- The contact form has no backend. Wire it to a real handler or form service, and
  leave a clear comment marking where.
