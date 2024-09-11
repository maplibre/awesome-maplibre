These scripts are used in a github action to sync Awesome MapLibre links with the MapLibre documentation site

## Extract.mjs

This script extract some content from a reference file (README.md), replace extracts into a template file and print on the standard output. 

```bash
# Usage: extract.mjs reference-file template-file
node scripts/extract.mjs README.md scripts/plugins.template.md 
```

you need to define some boundaries in your reference file with
```
<!-- [SOME-ID]:BEGIN -->
...
<!-- [SOME-ID]:END -->
```
and some placeholders in your template file with
```
<!-- [SOME-ID] -->
```
the extracted content would be replaced in the placeholders of the template file
Example:
node ./extract.mjs readme-file.md template-file.md > output.md

```md readme-file.md
...begin
<!-- [JAVASCRIPT-BINDINGS]:BEGIN -->
YOUR-CONTENT TO EXTRACT
<!-- [JAVASCRIPT-BINDINGS]:END -->
...end
```

```md template-file.md
My template
<!-- [JAVASCRIPT-BINDINGS] -->
```
will produce the following content in your output.md
```
My template
YOUR-CONTENT TO EXTRACT
```