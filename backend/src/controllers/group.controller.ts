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
  async createGroup(@Res() response, @Body() group: CreateGroupDto) {
    const newGroup = await this.groupService.createGroup(group);
    return response.status(HttpStatus.CREATED).json(newGroup);
  }

  @Get()
  @ApiOkResponse({
    type: Group,
    isArray: true,
    description: 'Group has been successfully retrieved.',
  })
  @ApiOperation({ summary: 'get alll todo groups' })
  async fetchAll(@Res() response) {
    const groups = await this.groupService.findAll();
    return response.status(HttpStatus.OK).json(groups);
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
  async findById(@Res() response, @Param('id') id) {
    console.log(id, '------------------------------');
    const group = await this.groupService.findOne(id);
    return response.status(HttpStatus.OK).json(group);
  }
}
