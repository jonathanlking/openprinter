/// <reference path="../typings/index.d.ts" />
/// <reference path="./interfaces.d.ts"/>

export default class GalleryModel implements IGalleryModel {
  public items: Array<IGalleryItem>;  // a list of items
  public onChanges: Array<any>;       // a list of events

  constructor(items: Array<IGalleryItem>) {
    this.items = items
    this.onChanges = []
  }

  public subscribe(onChange: any) {
    this.onChanges.push(onChange);
  }

  public notify() {
    this.onChanges.forEach(function (cb) { cb(); });
  }
}
