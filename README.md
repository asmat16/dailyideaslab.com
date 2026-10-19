# Daily Ideas Lab

The website for [dailyideaslab.com](https://dailyideaslab.com). A small Next.js notebook, hosted on Vercel.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Domain

`dailyideaslab.com` and `www.dailyideaslab.com` are already added to the Vercel project. Public DNS still uses:

- `ns1.lander.d.parity.domains`
- `ns2.lander.d.parity.domains`

Those nameservers answer with `104.219.250.37` and `2.59.170.20`. There are no MX or TXT records on the domain right now.

In Namecheap, open Domain List → Manage → Nameservers, choose Custom DNS, and set:

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

If you would rather keep DNS at Namecheap, switch the nameservers to Namecheap BasicDNS first, then in Advanced DNS remove the old A records for `@` and add:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `216.198.79.1` |
| A | `@` | `64.29.17.1` |
| CNAME | `www` | `41a51887e93d54f1.vercel-dns-017.com` |

cPanel’s Zone Editor only applies while the domain’s nameservers point at that hosting account. They do not, today.
