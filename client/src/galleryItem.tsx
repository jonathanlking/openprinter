/// <reference path="../typings/index.d.ts" />
/// <reference path="./interfaces.d.ts"/>

export default class GalleryItem extends React.Component<IGalleryItemProps, {}> {

  constructor(props : IGalleryItemProps){
    super(props);
  }

  public render() {
    return (
      <li>
        <img src="{this.props.image}"/>
      </li>
    )
  }
}
