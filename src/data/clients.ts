// ─────────────────────────────────────────────────────────────
//  ⚠️  CONFIRM BEFORE LAUNCH
//  Named clients require written permission to reference publicly.
//  Until each is confirmed in writing, run the site with SHOW_NAMED_CLIENTS
//  set to false — the roster then renders as unnamed descriptors, which is
//  both accurate and legally safe.
// ─────────────────────────────────────────────────────────────

export const SHOW_NAMED_CLIENTS = true;

export type Client = {
  name: string;
  /** Shown instead of `name` when SHOW_NAMED_CLIENTS is false. */
  anonymous: string;
  detail: string;
};

export const CLIENTS: readonly Client[] = [
  {
    name: "Brookfield Properties",
    anonymous: "A global institutional owner-operator",
    detail: "Office & mixed-use portfolio",
  },
  {
    name: "Tredway",
    anonymous: "A New York affordable-housing developer",
    detail: "Affordable & workforce housing",
  },
  {
    name: "Loews Hotels",
    anonymous: "A national full-service hotel brand",
    detail: "Hospitality portfolio",
  },
  {
    name: "The Tisch Family Portfolio",
    anonymous: "A multi-generational New York family office",
    detail: "100+ New York City buildings",
  },
  {
    name: "New York Giants",
    anonymous: "An NFL franchise",
    detail: "Venue & training facilities",
  },
  {
    name: "Standard Communities",
    anonymous: "A national affordable-housing owner",
    detail: "LIHTC & Section 8 assets",
  },
];

export function clientLabel(client: Client) {
  return SHOW_NAMED_CLIENTS ? client.name : client.anonymous;
}
