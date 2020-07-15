export const createId = (prefix?: string) => {
  const timeNow = new Date();
  const id = (timeNow?.getTime() + Math.random()).toString();
  if (prefix) {
    return `${prefix}-${id}`;
  }

  return id;
};
