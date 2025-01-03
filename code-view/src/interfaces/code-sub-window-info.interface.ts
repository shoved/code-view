import type { CodeFileInfo } from './code-file-info.interface';

export interface CodeSubWindowInfo {
  id: number;
  files: CodeFileInfo[];
}