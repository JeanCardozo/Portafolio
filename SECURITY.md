# Security policy

This repository is the source of a static portfolio site (https://jeancrg.netlify.app). It has no database, no user accounts and no forms, and it stores no personal data.

## Reporting a vulnerability

Please report privately, not in a public issue:

- GitHub: use "Report a vulnerability" in the Security tab of this repository.
- Email: jean.cardozo.ramirez.23@gmail.com (subject: `SECURITY`).

I aim to acknowledge reports within 3 business days and to give a first assessment within 7. Please give me a reasonable time to fix before disclosing. There is no bounty program, but I credit reporters who want it.

## Scope

In scope: the site at jeancrg.netlify.app and the code in this repository (XSS, injection, insecure headers, exposed secrets, supply-chain issues in dependencies or workflows).

Out of scope: denial of service, social engineering, findings on third-party sites linked as case studies (report those to their owners), and automated scanner output without a demonstrated impact.

## Good-faith research

Testing that follows this policy and avoids data access, service disruption and privacy violations will not be treated as hostile.

## What is already in place

Secret scanning with push protection, Dependabot alerts and updates, CodeQL and gitleaks in CI, actions pinned to commit SHAs, least-privilege workflow tokens, protected `main`, and strict security headers (CSP, HSTS, `nosniff`, frame denial) on the deployed site.
