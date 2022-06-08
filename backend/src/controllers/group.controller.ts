import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { Group } from 'src/entities/group.entity';
import { GroupService } from 'src/services/group.service';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async createGroup(@Res() response, @Body() group: Group) {
    const newGroup = await this.groupService.createGroup(group);
    return response.status(HttpStatus.CREATED).json({
      newGroup,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const groups = await this.groupService.findAll();
    return response.status(HttpStatus.OK).json({
      groups,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const group = await this.groupService.findOne(id);
    return response.status(HttpStatus.OK).json({
      group,
    });
  }
}
