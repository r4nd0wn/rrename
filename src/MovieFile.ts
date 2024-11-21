import { XMLParser } from "fast-xml-parser";
import * as fs from "fs";

export class MovieFile {
  private _filename: string;
  private _folder: string;
  private _path: string[];
  private _upperpath: string;
  private _nfo: string;
  private _nfoObj: any;

  constructor(path: string) {
    this._path = path.split("/");
    this._filename = this._path[this._path.length - 1];
    this._folder = this._path[this._path.length - 2];
    this._upperpath = this._path.slice(0, this._path.length - 2).join("/");
    let file = this._filename.split(".");
    file[file.length - 1] = "nfo";
    this._nfo = file.join(".");
    this.parse();
  }

  private get _fsName(): string {
    let fn = this._filename.split(".");
    fn[fn.length - 1] = "";
    return fn.join(".");
  }

  private parse(): void {
    let p = new XMLParser();
    this._nfoObj = p.parse(fs.readFileSync(this.nfo, "utf-8"));
  }

  public get path(): string {
    return this._path.join("/");
  }

  public get nfo(): string {
    let p = this._path.join("/");
    let a = "";
    if (this._upperpath !== "") a += this._upperpath + "/";
    a = a + this._folder + "/" + "movie.nfo";
    return a;
  }

  public get nfoo(): any {
    return this._nfoObj;
  }

  public get folder(): string {
    let p = this._path;
    delete p[p.length - 1];
    return p.join("/");
  }

  public get suffix(): string {
    let f = this._filename.split(".");
    return f[f.length - 1];
  }

  public get title(): string {
    let title = this._nfoObj.movie.title
      ? this._nfoObj.movie.title
      : this._fsName;
    let year = this._nfoObj.movie.year
      ? " (" + this._nfoObj.movie.year + ")"
      : "";
    let imdbid = this._nfoObj.movie.imdbid
      ? " [imdbid-" + this._nfoObj.movie.imdbid + "]"
      : "";
    let t = title + year + imdbid;
    t.replaceAll("/", "");
    return t;
  }
}
