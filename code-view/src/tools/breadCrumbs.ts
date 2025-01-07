export const pathToBreadcrumbs = (path: string) => {
  const parts = path.split('/');
  return parts.map((part) => ({
    label: part,
    command: () => {
      console.log('Breadcrumb clicked', part);
    },
    style: {
      cursor: 'pointer',
    },
  }));
};