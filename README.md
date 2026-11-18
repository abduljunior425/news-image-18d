# The Markets React — Wednesday 18 November 2026

![Competition](https://make.fun/badge/news-image-20261118.svg)
![Rank](https://make.fun/badge/news-image-20261118/abduljunior425/news-image-18d/rank.svg)
![Reward](https://make.fun/badge/news-image-20261118/abduljunior425/news-image-18d/reward.svg)

A markets-led front page summing up the world's news of **Wednesday 18 November 2026** through the numbers that moved — oil, gold, shipping and stocks — entered in the [news-image-20261118 bounty](https://make.fun/bounty/news-image-20261118) on make.fun.

## The day in five moves

- **Oil slips to $92 despite the mines.** Brent eases to $92.63 a barrel as US crude stocks build by 5.3 million barrels, even as six tankers hit mines in the Strait of Hormuz on Sunday and Monday. A month earlier it topped $100 — the chart on the page shows the fall from the $101.21 peak.
- **Gold's haven fails.** Below $3,800 for the first time since September 2025, down 32% from January's record high. The dollar sits at a 19-month high, US yields near 5.1%, and markets price a ~96% chance of a December Fed hike.
- **Insuring the strait.** War-risk premiums for Hormuz transits climb to as much as 5% of hull value, up from about 2% last week, while traffic runs at roughly half pre-war levels.
- **Asia splits on Nvidia.** Seoul +1.3% and Taipei +1.25% as chip stocks rally on a $115.8bn quarter; Hong Kong −1.1% as JD.com drops 8%. Tokyo's Nikkei whipsaws either side of flat.
- **Defence climbs.** RTX +1.6%, Northrop +1.4%, Lockheed +0.9%; Nvidia +4.8% after hours. Wall Street fell a fourth straight day on Tuesday; the Dow lost 1.64%.

Every figure was verified live against reporting dated 18 November 2026 (Reuters, FXStreet, AP, Assafina, HDFC Sky). Where the live picture contradicted the obvious headline — oil falling, not topping $100, on a day of tanker attacks — the page says what actually happened.

## How it runs

`main.ts` (Node, standard library only, no network) checks `entry.png` is a real 1024×1024 PNG under the 1 MiB cap, copies it to `$MAKEFUN_OUTPUT_DIR` (default `/output`), then re-reads the copy and fails loudly unless its SHA-256 matches the source.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a 1024×1024 PNG, under 1 MiB. The tanker illustration was generated for this entry and all text was typeset on top of it, so every word is crisp at any size.
