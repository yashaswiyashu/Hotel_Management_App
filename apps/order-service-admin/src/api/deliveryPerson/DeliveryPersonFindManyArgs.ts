import { DeliveryPersonWhereInput } from "./DeliveryPersonWhereInput";
import { DeliveryPersonOrderByInput } from "./DeliveryPersonOrderByInput";

export type DeliveryPersonFindManyArgs = {
  where?: DeliveryPersonWhereInput;
  orderBy?: Array<DeliveryPersonOrderByInput>;
  skip?: number;
  take?: number;
};
