#!/usr/bin/env bun

import { Glob } from "bun";
import * as fs from "fs";
import { MovieFile } from "./src/MovieFile";
import { ConfigParser } from "./src/configparser";

let cp = new ConfigParser();
let glob = new Glob("**/**/*.{mkv,mp4}");

interface MovieInfo {
  path: string;
  title: string;
}

let errorFiles: string[] = [];
let j: MovieInfo[] = [];

for await (const file of glob.scan(cp.source)) {
  try {
    let a = new MovieFile(cp.source + file);
    j.push({
      path: a.path,
      title: a.title,
    });
    fs.mkdirSync(cp.destination + a.title);
    fs.renameSync(
      a.path,
      cp.destination + a.title + "/" + a.title + "." + a.suffix
    );
    process.stdout.write(cp.destination + a.title + "/" + a.title + "." + a.suffix + "\r\n");
  } catch (error) {
    process.stderr.write(error!.toString() + " " + file + "\r\n")
    errorFiles.push(file);
  }
}

if (cp.writeFile)
  fs.writeFileSync("./output.json", JSON.stringify({ success: j, error: errorFiles }));

if (errorFiles.length == 0) process.exit(0);
else process.exit(1);
