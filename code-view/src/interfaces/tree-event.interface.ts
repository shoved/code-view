import type { TreeNode } from "primevue/treenode"; // Import the TreeNode type

export interface TreeEvent {
  originalEvent: Event;
  node: TreeNode;
}