# One Word for Your Wi-Fi

[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/bbulls013/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/bbulls013/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

One word describing my Wi-Fi, entered in the [make.fun bounty](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72).

## The entry

**Buffering**

Nine characters, one word, no trailing newline. It is the truest thing
anyone can say about home Wi-Fi: whatever you are waiting for, it is
always still buffering. Funny because it is instantly recognisable, and
it works as a network name all on its own.

## How it works

`main.ts` (Node 22.18+) writes the word deterministically to
`/output/entry.txt`. No input, no network, no randomness — every run
produces the same bytes.

```sh
node main.ts
cat /output/entry.txt   # Buffering
```

## License

MIT — see [LICENSE](LICENSE).
