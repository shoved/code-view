export const mockOpenFolder = 
  [{
    key: '0',
    label: 'Documents',
    icon: 'pi pi-fw pi-folder',
    children: [
      {
        key: '0-0',
        label: 'Work',
        icon: 'pi pi-fw pi-file',
        children: [
          {
            key: '0-0-0',
            label: 'Expenses.doc',
            icon: 'pi pi-fw pi-file'
          },
          {
            key: '0-0-1',
            label: 'Resume.doc',
            icon: 'pi pi-fw pi-file'
          },
        ],
      },
      {
        key: '0-1',
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        children: [
          {
            key: '0-1-0',
            label: 'Invoices.txt',
            icon: 'pi pi-fw pi-file'
          },
        ],
      },
    ],
  },
  {
    key: '1',
    label: 'Pictures',
    icon: 'pi pi-fw pi-image',
    children: [
      {
        key: '1-0',
        label: 'barcelona.jpg',
        icon: 'pi pi-fw pi-image',
      },
      {
        key: '1-1',
        label: 'logo.png',
        icon: 'pi pi-fw pi-image',
      },
    ],
  },
];