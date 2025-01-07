import type { CodeSubWindowInfo } from '../interfaces/code-sub-window-info.interface';

export const codeViewWindows: CodeSubWindowInfo[] = [
  {
    id: 1,
    files: [
      {
        name: 'File1.txt',
        content: 'This is the content of File1.txt',
        language: 'text',
        path: 'main/src/File1.txt',
      }
    ],
  }
];