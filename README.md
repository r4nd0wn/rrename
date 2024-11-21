# rrename

This script helps me to keep my jellyfin library organized. 
If I add a new Movie, i have an unsorted folder for this.
When the added movie is identified by jellyfin (and nfo writing is on for the library),
This little script renames me the movie name and folder structure in this format:

_MOVIENAME (YEAR) [imdbid-IMDBID]/MOVIENAME (YEAR) [imdbid-IMDBID].suffix_

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

The priority for those are:
1. arvs
2. ENV
3. config file

## run with bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## bundle with bun

It is quite easy and fast to create your target by yourself.

0. install bun:
[bun.sh](https://bun.sh)

1. clone the package:
```bash
git clone git@github.com:r4nd0wn/rrename.git
```

2. install dependencies (fast-xml-parser)
```bash
bun install
```

