// V4 — "Last Text at One Percent" (arah 4: HP salah paham soal apa itu mati —
// mengira 0% berarti tidur, lalu sadar terlambat; ketidaktahuan HP tentang
// dirinya sendiri yang jadi mesin leluconnya, bukan kesedihan manusiawi).
// Menulis satu teks terakhir ke /output/entry.txt. Deterministik, stdlib saja,
// tanpa network, tanpa jam dinding. Teks ditulis sebagai konstanta agar dua
// run menghasilkan byte yang identik.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "So 0% just means I sleep, right? Right?? Tell the charger I— oh. Oh no. I can see the light. It's the flashlight. Okay. Panic now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
