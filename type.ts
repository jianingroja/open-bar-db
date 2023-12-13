export type Bar = {
  editorialSummary: {
    language: string;
    overview: string;
  };
  formattedAddress: string;
  name: string;
  placeId: string; // google map id
  url: string; // google map
  website: string;
  wheelchairAccessibleEntrance: boolean;
  city: string;
  country: string;
};

export type BarWithIndex = {
  bar: Bar;
  index: number;
};
