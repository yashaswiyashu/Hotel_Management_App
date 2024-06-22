import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeliveryPersonResolverBase } from "./base/deliveryPerson.resolver.base";
import { DeliveryPerson } from "./base/DeliveryPerson";
import { DeliveryPersonService } from "./deliveryPerson.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeliveryPerson)
export class DeliveryPersonResolver extends DeliveryPersonResolverBase {
  constructor(
    protected readonly service: DeliveryPersonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
