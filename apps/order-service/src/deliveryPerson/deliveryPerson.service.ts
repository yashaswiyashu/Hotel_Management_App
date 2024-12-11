import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryPersonServiceBase } from "./base/deliveryPerson.service.base";

@Injectable()
export class DeliveryPersonService extends DeliveryPersonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
