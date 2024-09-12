import { readFile } from "node:fs/promises";

if (process.argv.length !== 4) {
  console.error("Usage: extract.mjs reference-file template-file");
  process.exit(1);
}

const referencePath = process.argv[2];
const templatePath = process.argv[3];

const contentGroupsRE =
  /<!--\s*\[([-a-zA-Z]+)\]:BEGIN\s*-->([\s\S]*?)<!--\s*\[\1\]:END\s*-->/g;

const referenceContent = await readFile(referencePath, { encoding: "utf-8" });
const matches = referenceContent.matchAll(contentGroupsRE);
const groups = Object.fromEntries(
  Array.from(matches).map(([, key, content]) => [key, content])
);

let templateContent = await readFile(templatePath, { encoding: "utf-8" });

const contentPlaceholdersRE = /<!--\s*\[([-a-zA-Z]+)\]\s*-->/g;
const placeholderMatches = templateContent.matchAll(contentPlaceholdersRE);

for (let [placeholder, identifier] of placeholderMatches) {
  if (!groups[identifier]) {
    throw new Error(
      `Referenced identifier ${identifier} is not present in reference file.`
    );
  }
  templateContent = templateContent.replace(placeholder, groups[identifier]);
}

const banner = `<!-- Do not edit. This file is generated from Awesome MapLibre -->
<!-- https://github.com/maplibre/awesome-maplibre/tree/main/scripts -->\n\n`;

console.log(banner + templateContent);
