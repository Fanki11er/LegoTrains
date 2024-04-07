import { SlotOrConnectorPosition } from "../Enums/SlotOrConnectorPosition";
import { SlotOrConnector } from "../Enums/SlotsOrConnector";

export type NestElementUserData = {
  Position: SlotOrConnectorPosition;
  Type: SlotOrConnector;
  forPartNumber: string;
  isEmpty: boolean;
  isSlot: boolean;
};
