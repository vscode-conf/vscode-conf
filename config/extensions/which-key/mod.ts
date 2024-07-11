import { Bookmark } from "./bookmark.ts";
import { Buffers } from "./buffers.ts";
import { Debug } from "./debug.ts";
import { Git } from "./git.ts";
import { Insert } from "./insert.ts";
import { Misc } from "./misc.ts";
import { Open } from "./open.ts";
import { LSP } from "./lsp.ts";
import { Peek } from "./peek.ts";
import { Find } from "./find.ts";
import { Show } from "./show.ts";
import { UI } from "./ui.ts";
import { Window } from "./window.ts";

const Entries = [
  //   ...Bookmark,
  ...Buffers,
  //   ...Debug,
  //   ...Git,
  //   ...Insert,
  //   ...LSP,
  ...Misc,
  //   ...Open,
  ...Peek,
  ...Find,
  //   ...Show,
  //   ...UI,
  ...Window,
];

export const WhichKey = {
  "whichkey.sortOrder": "alphabetically",
  "whichkey.delay": 0,
  "whichkey.bindings": Entries,
  "whichkey.showButtons": false,
};
