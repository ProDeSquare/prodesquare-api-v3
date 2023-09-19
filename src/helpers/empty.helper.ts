const requestHasEmptyFields = (req: Record<string, string>): boolean => {
  for (const key in req) {
    if (req[key] === undefined) {
      return true;
    }
  }

  return false;
};

export default requestHasEmptyFields;
