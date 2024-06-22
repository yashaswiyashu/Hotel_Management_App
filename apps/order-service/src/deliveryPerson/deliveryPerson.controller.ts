import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryPersonService } from "./deliveryPerson.service";
import { DeliveryPersonControllerBase } from "./base/deliveryPerson.controller.base";

@swagger.ApiTags("deliveryPeople")
@common.Controller("deliveryPeople")
export class DeliveryPersonController extends DeliveryPersonControllerBase {
  constructor(
    protected readonly service: DeliveryPersonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
