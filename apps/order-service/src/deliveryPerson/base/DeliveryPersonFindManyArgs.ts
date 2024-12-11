/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeliveryPersonWhereInput } from "./DeliveryPersonWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DeliveryPersonOrderByInput } from "./DeliveryPersonOrderByInput";

@ArgsType()
class DeliveryPersonFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DeliveryPersonWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DeliveryPersonWhereInput, { nullable: true })
  @Type(() => DeliveryPersonWhereInput)
  where?: DeliveryPersonWhereInput;

  @ApiProperty({
    required: false,
    type: [DeliveryPersonOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DeliveryPersonOrderByInput], { nullable: true })
  @Type(() => DeliveryPersonOrderByInput)
  orderBy?: Array<DeliveryPersonOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DeliveryPersonFindManyArgs as DeliveryPersonFindManyArgs };
