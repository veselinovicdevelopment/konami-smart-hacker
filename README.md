This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# The Konami Code

You are the leader of Anonymous - the group of hackers. For the last couple of months your main way of communication with your teammates was Twitter. Now FBI knows about it, and they are following all your Twitter accounts. Before your group started using tweets, the Anonymous hackers were using a secret website to share information. It looked like a standard website with sweet kittens, but after typing the Konami Code, all of the secret messages were shown. Unfortunately, the website is down, and the source code is lost. Your challenge is to develop this kind of site from scratch to provide a way of communication for your teammates.

## Tasks
1) Create basic page with "Sweet kittens" header
2) Add JavaScript code that will do the following things:
    - After typing Konami Code 'injects3crets' make a request for secret data(described under the task)
    - Display 5 newest issues names and nickname of the author
    - After 15 seconds hide all issues

## Source of data

As a smart hacker, you've found a safe way to communicate - Using the names of the Github issues to receive messages. Every day your teammates are posting
issues on a different repository and the name of every one is another secret message. Today you and your team have choosed elixir language repository. To get the data just fetch JSON form this URL: https://api.github.com/repos/elixir-lang/elixir/issues

## Prerequisites
1) 'ESC' key cancels currently written part of the Konami Code
2) Max timestamp between each next pressed key is 5 seconds(after that time Konami Code should be reset)
3) Size of the letter matters(upper/lower case)
4) Do not use jQuery

## Helpful Links
If you don't know how the Konami Code looks like check this:
- https://en.wikipedia.org/wiki/Konami_Code

