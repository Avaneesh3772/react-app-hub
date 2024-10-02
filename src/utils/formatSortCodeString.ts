export const formatSortCodeString = (sortcode: string) => {
    if (typeof sortcode !== 'string') {
      // throw new Error('Invalid argument: sortcode must be a string');
      return 'Invalid input type';
    }
  
    const codeStr = sortcode.padStart(6, '0');
    return `${codeStr.slice(0, 2)}-${codeStr.slice(2, 4)}-${codeStr.slice(4, 6)}`;
};