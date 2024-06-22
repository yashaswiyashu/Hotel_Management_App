import { DeliveryPerson as TDeliveryPerson } from "../api/deliveryPerson/DeliveryPerson";

export const DELIVERYPERSON_TITLE_FIELD = "id";

export const DeliveryPersonTitle = (record: TDeliveryPerson): string => {
  return record.id?.toString() || String(record.id);
};
