// Minimal YAML frontmatter parser — handles the subset we need:
// scalars (quoted or bare), nested lists of objects with scalar fields.
// Avoids a Node-buffer dependency so it works in Vite browser builds.

export type Frontmatter = Record<string, unknown>;

export function parseFrontmatter(source: string): { data: Frontmatter; content: string } {
  const m = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: source };
  const [, yaml, content] = m;
  return { data: parseYaml(yaml), content };
}

function parseYaml(yaml: string): Frontmatter {
  const lines = yaml.split(/\r?\n/).filter((l) => l.trim().length > 0 && !l.trim().startsWith("#"));
  const root: Frontmatter = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const indent = line.match(/^(\s*)/)![1].length;
    if (indent !== 0) {
      i++;
      continue;
    }
    const m = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!m) {
      i++;
      continue;
    }
    const key = m[1];
    const rest = m[2];
    if (rest === "" || rest === "|" || rest === ">") {
      // list or block follows
      const { value, nextIndex } = parseList(lines, i + 1);
      root[key] = value;
      i = nextIndex;
    } else {
      root[key] = parseScalar(rest);
      i++;
    }
  }
  return root;
}

function parseList(lines: string[], start: number): { value: unknown; nextIndex: number } {
  const items: Array<Record<string, unknown> | string> = [];
  let i = start;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trimStart();
    const indent = line.length - trimmed.length;
    if (indent === 0) break;
    if (!trimmed.startsWith("- ")) break;

    const first = trimmed.slice(2); // after "- "
    const kv = first.match(/^(\w[\w-]*):\s*(.*)$/);
    if (kv) {
      const obj: Record<string, unknown> = {};
      obj[kv[1]] = parseScalar(kv[2]);
      i++;
      // collect following more-indented key/value lines
      while (i < lines.length) {
        const l = lines[i];
        const t = l.trimStart();
        const ind = l.length - t.length;
        if (ind <= indent) break;
        const sub = t.match(/^(\w[\w-]*):\s*(.*)$/);
        if (!sub) {
          i++;
          continue;
        }
        obj[sub[1]] = parseScalar(sub[2]);
        i++;
      }
      items.push(obj);
    } else {
      items.push(parseScalar(first) as string);
      i++;
    }
  }
  return { value: items, nextIndex: i };
}

function parseScalar(raw: string): unknown {
  const s = raw.trim();
  if (s === "") return "";
  if (s === "true") return true;
  if (s === "false") return false;
  if (s === "null" || s === "~") return null;
  // Quoted strings
  const dq = s.match(/^"((?:[^"\\]|\\.)*)"$/);
  if (dq) return dq[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  const sq = s.match(/^'((?:[^']|'')*)'$/);
  if (sq) return sq[1].replace(/''/g, "'");
  // Number
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  return s;
}
