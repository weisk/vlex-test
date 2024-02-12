export type SubJurisdiction = Record<string,any>;
export type Jurisdiction = Record<string,any>;
export type Jurisdictions = Array<Jurisdiction>;

export type FetchJurisdictions = () => Jurisdictions;
export type FetchJurisdiction = (jurisdictionId: string) => Jurisdiction;
export type FetchSubJurisdictions = (jurisdictionId: string) => Array<SubJurisdiction>;
