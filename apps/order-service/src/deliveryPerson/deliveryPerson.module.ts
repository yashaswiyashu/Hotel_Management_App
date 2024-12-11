import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeliveryPersonModuleBase } from "./base/deliveryPerson.module.base";
import { DeliveryPersonService } from "./deliveryPerson.service";
import { DeliveryPersonController } from "./deliveryPerson.controller";
import { DeliveryPersonResolver } from "./deliveryPerson.resolver";

@Module({
  imports: [DeliveryPersonModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeliveryPersonController],
  providers: [DeliveryPersonService, DeliveryPersonResolver],
  exports: [DeliveryPersonService],
})
export class DeliveryPersonModule {}
