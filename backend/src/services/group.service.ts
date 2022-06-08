import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupDto } from 'src/entities/dto/group.dto';
import { Group } from 'src/entities/group.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  findAll(): Promise<Group[]> {
    return this.groupRepository.find();
  }

  findOne(id: number): Promise<Group> {
    return this.groupRepository.findOne({ where: [{ id }] });
  }

  createGroup(group: CreateGroupDto): Promise<Group> {
    return this.groupRepository.save(group);
  }
  deleteGroup(id: number): Promise<DeleteResult> {
    return this.groupRepository.delete({ id });
  }
}
