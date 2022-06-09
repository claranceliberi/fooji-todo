import { Group } from 'src/entities/group.entity';
import { CreateGroupDto } from './../entities/dto/group.dto';
import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { GroupService } from 'src/services/group.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('groups')
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Group has been successfully created.',
    type: Group,
  })
  @ApiOperation({ summary: 'create todo group' })
  async createGroup(@Body() group: CreateGroupDto) {
    return await this.groupService.createGroup(group);
  }

  @Get()
  @ApiOkResponse({
    type: Group,
    isArray: true,
    description: 'Group has been successfully retrieved.',
  })
  @ApiOperation({ summary: 'get alll todo groups' })
  async fetchAll() {
    return await this.groupService.findAll();
  }

  @Get('/:id')
  @ApiOkResponse({
    description: 'Group has been successfully retrieved by its id.',
    type: Group,
  })
  @ApiOperation({ summary: 'get all todo grup by id' })
  @ApiParam({
    name: 'id',
    type: 'number',
    example: 1,
    description: 'id of group',
  })
  async findById(@Param('id') id) {
    return await this.groupService.findOne(id);
  }
}
