import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const workspaceDir = dirname(dirname(fileURLToPath(import.meta.url)));
const previousPluginsPath = join(workspaceDir, "partial-repo/docs/plugins.md");
const awesomeReadmePath = join(workspaceDir, "awesome/README.md");
const nextPluginsPath = join(workspaceDir, "plugins.new.md");

const previousPluginsContent = await readFile(previousPluginsPath, {
  encoding: "utf-8",
});

const contentGroupsRe = /<!--\s*>([-a-zA-Z]+)\s*-->([\s\S]*?)<!--\s*<\1\s*-->/g;

const readmeContent = await readFile(awesomeReadmePath, {
  encoding: "utf-8",
});

const matches = readmeContent.matchAll(contentGroupsRe);
const groups = Object.fromEntries(
  Array.from(matches).map(([, key, content]) => [key, content])
);

const nextPluginsContent = `<!-- Do not edit. This file is generated from Awesome MapLibre -->

# Plugins

${groups["JAVASCRIPT-PLUGINS"] ?? ""}

## Framework Integrations

${groups["JAVASCRIPT-BINDINGS"] ?? ""}
`;

if (previousPluginsContent !== nextPluginsContent) {
  console.log(
    "plugins content has changed we create a PR to update content into website."
  );

  await writeFile(nextPluginsPath, nextPluginsContent, { encoding: "utf-8" });
} else {
  console.log("plugins content has not changed we do nothing.");
}
