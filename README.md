# Daily Ideas Lab

The website for [dailyideaslab.com](https://dailyideaslab.com). A small Next.js notebook, hosted on Vercel.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Domain

The domain is registered through Namecheap. DNS currently points at Namecheap (`104.219.250.37`) and a second address (`2.59.170.20`), using these nameservers:

- `ns1.lander.d.parity.domains`
- `ns2.lander.d.parity.domains`

Point the domain at Vercel from whichever panel actually edits that zone (Namecheap → Domain List → Advanced DNS, or cPanel → Zone Editor). Leave mail records alone.

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Remove the old A records for `@` when you add the Vercel one. Do not delete MX, TXT, or mail CNAMEs if the domain sends email. After the records save, add `dailyideaslab.com` and `www.dailyideaslab.com` to the Vercel project.
