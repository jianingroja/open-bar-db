# Open Bar DB

Collecting data of craft beer bars in

- Barcelona

Powering [give me five beer](https://github.com/jianingroja/give-me-five-beers)

### Api

- `GET https://open-bar-db.vercel.app/bar/random`

  ```
  // Random bar

  {
    bar: {
      editorialSummary: {
        language: string,
        overview: string,
      },
      formattedAddress: string,
      name: string,
      placeId: string, // google map id
      url: string, // google map
      website: string,
      wheelchairAccessibleEntrance: boolean,
      city: string,
      country: string,
    },
    index: number
  }

  ```

- `GET https://open-bar-db.vercel.app/bar/:index`

  ```
  // Certain bar of given index

  {
    editorialSummary: {
      language: string,
      overview: string,
    },
    formattedAddress: string,
    name: string,
    placeId: string, // google map id
    url: string, // google map
    website: string,
    wheelchairAccessibleEntrance: boolean,
    city: string,
    country: string,
  }

  ```
