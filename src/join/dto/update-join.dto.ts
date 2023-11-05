import { PartialType } from '@nestjs/swagger';
import { CreateJoinDto } from './create-join.dto';

export class UpdateJoinDto extends PartialType(CreateJoinDto) {}
