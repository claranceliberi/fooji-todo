import { groupService } from "@/services/group.service";
import type { Group, GroupInput } from "@/types";
import { defineStore } from "pinia";

interface GroupState {
  groups: Group[];
}

export const useGroupStore = defineStore({
  id: "group",
  state: (): GroupState => ({
    groups: [],
  }),

  actions: {
    async addGroup(payload: GroupInput) {
      return await groupService.createGroup(payload);
    },
    async getAllGroupItems() {
      const res = await groupService.getAllGroups();

      this.groups = res.data;
      return res.data;
    },
    async deleteGroup(id: number) {
      return await groupService.deleteGroup(id);
    },
  },
});
