import { SelectedElementContextMenuWrapper } from "./SelectedElementContextMenu.styles";

type Props = {
  name: string;
};
const SelectedElementContextMenu = (props: Props) => {
  const { name } = props;
  return (
    <SelectedElementContextMenuWrapper>
      {name}
    </SelectedElementContextMenuWrapper>
  );
};
export default SelectedElementContextMenu;
