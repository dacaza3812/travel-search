This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Presentation

This website is an example of an airline ticket reservation system, was developed with Nextjs. It is designed with [Tailwind_CSS] 
    and still needs styling fixes to make it responsive.

## Characteristic:
Te page is divided into two sections:
- [Selector]
    'The selector has a 3 child elements:'
        -> AdultCount [`with the adult count`]
        -> Economy [`flight type economy`]
        -> RoundTrip [`round trip option`]

- [TravelOptions]
    'The selector has a 4 child elements:'
        -> ButtonArrow [`a button with simple icon`]
        -> ButtonSearch [`a button with the search symbol`]
        -> DataPicker [`a calendar to select a range of dates`]
        -> SelectorCountry [`city picker`]

[The city picker obtains the data by means of "fetch" from:](https://restcountries.com/)[API]

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
