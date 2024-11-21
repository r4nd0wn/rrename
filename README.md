# rrename

## config
The config can be set in the following places:
1. config file at: ~/.config/rrename/config.json:
the config file should look like this:
```json
{
    "source": "/mnt/unsortedStuff/",
    "dest": "/mnt/hugeMovieLibrary-sorted/"
}
```
2. As ENV Vars for the process:
```bash
export SOURCE=/mnt/unsortedStuff/;
export DEST=/mnt/hugeMovieLibrary-sorted/;
```
3. As arguments for the command:
```bash
# when using bun
bun run index.ts --src=/mnt/unsortedStuff/ --dest=/mnt/hugeMovieLibrary-sorted/
# when using executable
rrename --src=/mnt/unsortedStuff/ --dest=/mnt/hugeMovieLibrary-sorted/
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```


