import { PrimeVueIcons } from '../enums/prime-icons.enum';

const command = (cmd: string) => {
  console.log(cmd);
};

export const codeToolbarItems = [
  {
    label: 'File',
    icon: PrimeVueIcons.FILE,
    command: command('file'),
    items: [
      {
        label: 'New',
        icon: PrimeVueIcons.NEW,
        command: command('new'),
        items: [
          {
            label: 'Project',
            icon: PrimeVueIcons.NEW,
            command: command('project')
          },
          {
            label: 'Other',
            icon: PrimeVueIcons.NEW,
            command: command('other')
          }
        ]
      },
      {
        label: 'Open',
        icon: PrimeVueIcons.OPEN,
        command: command('open')
      },
      {
        label: 'Save',
        icon: PrimeVueIcons.SAVE,
        command: command('open')
      },
      {
        label: 'Quit',
        icon: PrimeVueIcons.QUIT,
        command: command('quit')
      }
    ]
  },
  {
    label: 'Edit',
    icon: PrimeVueIcons.EDIT,
    command: command('edit'),
    items: [
      {
        label: 'Undo',
        icon: PrimeVueIcons.UNDO,
        command: command('undo')
      },
      {
        label: 'Redo',
        icon: PrimeVueIcons.REDO,
        command: command('redo')
      }
    ]
  },
  {
    label: 'Help',
    icon: PrimeVueIcons.HELP,
    command: command('help'),
    items: [
      {
        label: 'Info',
        icon: PrimeVueIcons.INFO,
        command: command('info')
      },
      {
        label: 'Contents',
        icon: PrimeVueIcons.CONTENTS,
        command: command('contents')
      },
      {
        label: 'Search',
        icon: PrimeVueIcons.SEARCH,
        command: command('search')
      }
    ]
  }
];