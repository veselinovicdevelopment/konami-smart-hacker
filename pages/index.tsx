import Head from "next/head";
import { useEffect, useState } from "react";

import { useKonamiCode } from "../utils/hooks/useKonamiCode";

interface Issue {
  title: string;
  number: number;
  html_url: string;
  comments: number;
  state: string;
  updated_at: string;
  user: {
    login: string;
  };
}

export default function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const success = useKonamiCode();

  useEffect(() => {
    if (success) {
      fetch("https://api.github.com/repos/elixir-lang/elixir/issues")
        .then((res) => res.json())
        .then((data) => {
          setIssues(data.slice(0, 5));
        });
    } else {
      setIssues([]);
    }
  }, [success]);

  return (
    <div className="container">
      <Head>
        <title>Mike test</title>
        <meta
          name="description"
          content="Generated by create next app by Mike"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <h1 className="title">Sweet kittens</h1>
      </header>

      <main className="main">
        {issues.length > 0 && (
          <div className="issues-wrapper">
            {issues.map((issue, index) => (
              <IssueItem issue={issue} key={index} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

interface IssueItemProps {
  issue: Issue;
}

const IssueItem = ({ issue }: IssueItemProps) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(issue.updated_at).getDate();
  const m = months[new Date(issue.updated_at).getMonth()];

  return (
    <div className="issue">
      <div className="issue-left">
        <h4 className="issue-title">
          <a href={issue.html_url}>{issue.title}</a>
        </h4>
        <p className="issue-desc">
          # {issue.number} {issue.state} on {m} {d} by {issue.user.login}
        </p>
      </div>
      <div className="issue-right">
        <a href={issue.html_url}>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
          >
            <path
              fillRule="evenodd"
              d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
            ></path>
          </svg>
          <span className="text-small text-bold">{issue.comments}</span>
        </a>
      </div>
    </div>
  );
};