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

3. bundle the project
```bash
./bundle.sh
```

For me (M4 base model mac mini), it took 0.308 seconds in total to bundle. Remember, this is not compiling, it just packs the bun executable and the script in a file.
```bash
r4nd0wn@Mac rrename % time ./bundle.sh 
  [17ms]  minify  -43.26 KB (estimate)
   [2ms]  bundle  16 modules
   [2ms] compile  ./build/rrename-linux-x64 bun-linux-x64-v1.1.34
   [2ms]  minify  -43.26 KB (estimate)
   [1ms]  bundle  16 modules
   [1ms] compile  ./build/rrename-linux-arm64 bun-linux-aarch64-v1.1.34
   [2ms]  minify  -43.26 KB (estimate)
   [1ms]  bundle  16 modules
   [1ms] compile  ./build/rrename-windows-x64.exe bun-windows-x64-v1.1.34
   [2ms]  minify  -43.26 KB (estimate)
   [0ms]  bundle  16 modules
 [100ms] compile  ./build/rrename-darwin-x64 bun-darwin-x64-v1.1.34
   [3ms]  minify  -43.26 KB (estimate)
   [1ms]  bundle  16 modules
  [96ms] compile  ./build/rrename-darwin-arm64

  rrnename.js  67.17 KB

[3ms] bundle 16 modules

  rrnename.min.js  31.73 KB

[3ms] bundle 16 modules
./bundle.sh  0.06s user 0.10s system 51% cpu 0.308 total
```
