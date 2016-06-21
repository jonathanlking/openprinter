/// <reference path="../typings/index.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import GalleryModel from './galleryModel'
import GalleryItem from './galleryItem'

import React = require('react')

class GalleryApp extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props)
  }

  public render() {
    let items = this.props.model.items

    var galleryItems = items.map(function (item: IGalleryItem) {
     return (<GalleryItem item={item} />)
    }, this)

    return (
      <div>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <ul className="gallery-list">
          {galleryItems}
        </ul>
      </div>
    )
  }
}


var items: Array<IGalleryItem> = [
  {
    id: "1",
    image: "http://lorempixel.com/image_output/cats-h-c-220-320-7.jpg",
    large: false
  },
  {
    id: "2",
    image: "http://lorempixel.com/image_output/cats-h-c-220-320-7.jpg",
    large: false
  },
  {
    id: "3",
    image: "http://lorempixel.com/image_output/cats-h-c-220-320-7.jpg",
    large: false
  }
]

var model = new GalleryModel([]);

function render() {
  ReactDOM.render(
    <GalleryApp title="Gallery" model={model}/>,
    document.getElementById('gallery')
  );
}

model.subscribe(render);
render();
