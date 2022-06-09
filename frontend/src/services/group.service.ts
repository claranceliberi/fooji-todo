import { $axios } from "@/plugins/axios";
import type { Group, GroupInput } from "@/types";
import type { AxiosResponse } from "axios";

class GroupService {
  private readonly path = "groups";

  public async getAllGroups(): Promise<AxiosResponse<Group[]>> {
    return await $axios.get(this.path);
  }

  public async getGroup(id: number): Promise<AxiosResponse<Group>> {
    return await $axios.get(this.path + `/${id}`);
  }

  public async createGroup(group: GroupInput): Promise<AxiosResponse<Group>> {
    return await $axios.post(this.path, group);
  }
  public async deleteGroup(id: number): Promise<AxiosResponse<Group>> {
    return await $axios.get(this.path + `/${id}`);
  }
}

export const groupService = new GroupService();
