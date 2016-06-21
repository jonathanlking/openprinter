interface IGalleryItem {
  id: string,
  image: string,
  large: boolean
}

interface IGalleryItemProps {
  item: IGalleryItem
  // onToggle: () => void
}

interface IGalleryItemState {
  large: boolean
}

interface IGalleryModel {
  items: Array<IGalleryItem>,
  onChanges : Array<any>,
  subscribe: (onChange: any) => void
}

interface IAppProps {
  title: string,
  model: IGalleryModel
}
