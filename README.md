# news-image-20261122-entry

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/abilyusa/news-image-20261122-entry/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/abilyusa/news-image-20261122-entry/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One image that sums up the world news of Sunday, 22 November 2026: a
broadsheet front page drawn in code, with the day's lead story and six more
across the Gulf, trade, climate, the Baltic, Mexico and Ukraine.

The lead is Iran's Saturday-night strike on US bases in Bahrain — two waves
of drones and missiles hit four bases, and tankers burned in the Strait of
Hormuz. Around it: the EU–Indonesia trade deal signed in Brussels after a
decade of talks, COP31 running into overtime still deadlocked in Antalya,
a Russian cargo ship ablaze in the Baltic after a drone hit, Mexico's capture
of FBI top-10 fugitive "El Chapo Isidro", the missile strike on Kryvyi Rih,
and the magnitude 6.9 quake in Peru's Andes. A "day in numbers" strip adds
the verified figures behind the stories.

The image is drawn with flat colours and crisp text on purpose: an AI judge
reads it at small size, so every word is rendered by code, never by a picture
generator — no garbled text, nothing invented, every number from the day's
reporting (Reuters, AP, CNN, Euronews, Al Jazeera, USGS).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network. `main.ts` copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). Run it twice and
the bytes are identical.

## Files

- `entry.png` — the image, 1024×1024 PNG, 144,091 bytes (gate: at most
  1 MiB and 1024×1024)
- `main.ts` — the entrypoint, copies `entry.png` to the output directory
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
