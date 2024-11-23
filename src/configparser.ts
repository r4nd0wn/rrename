import { type as ostype } from "os";
import { existsSync, readFileSync } from 'fs'

export class ConfigParser {
  private _sourceDirectory!: string;
  private _destDirectory!: string;
  private _configPathLikeNix = "/.config/rrename/config.json";
  private _writeFile: boolean = true;
  constructor() {
    /**
     * 3rd prio is config file
     * 2nd prio is env
     * 1st prio is args
     */
    if (this.isNix) {
      this._configPathLikeNix = process.env.HOME + this._configPathLikeNix;
      this._parseNixConfig();
    }
    if (process.env.SOURCE)
      this._sourceDirectory = process.env.SOURCE;
    if (process.env.DEST)
      this._destDirectory = process.env.DEST;
    this._parseArgv();
    this._validateConfig();

  }

  public get writeFile(): boolean {
    return this._writeFile;
  }

  public get source(): string {
    return this._sourceDirectory;
  }

  public get destination(): string {
    return this._destDirectory;
  }

  protected _validateConfig() {
    if (existsSync(this._sourceDirectory) && existsSync(this._destDirectory)) {
      if (!(this._sourceDirectory.slice(-1) === "/")) this._sourceDirectory += "/";
      if (!(this._destDirectory.slice(-1) === "/")) this._destDirectory += "/";
      return;
    }
    throw new Error("source or destination Directory is not valid.")
  }

  protected get isNix(): boolean {
    return (ostype() == "Darwin" || ostype() == "Linux");
  }

  protected _parseArgv(): void {
    // need to loop, if called with node or bun, first argument is node/bun,
    // second is .ts/.js file.
    // if packed with bun, first argument is exe, second and third are real args.
    for (let singleArg of process.argv) {
      if (singleArg.startsWith("--src=")) {
        this._sourceDirectory = singleArg.substring(6);
      }
      if (singleArg.startsWith("--dest=")) {
        this._destDirectory = singleArg.substring(7);
      }
      if (singleArg.startsWith("--nofile")) this._writeFile = false;
    }
  }

  protected _parseNixConfig(): void {
    if (!existsSync(this._configPathLikeNix)) return;
    let fromFile = JSON.parse(readFileSync(this._configPathLikeNix).toString());
    if (fromFile.source) this._sourceDirectory = fromFile.source;
    if (fromFile.dest) this._destDirectory = fromFile.dest;
  }
}
