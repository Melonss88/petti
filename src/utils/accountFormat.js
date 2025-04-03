export const accountFormat = (account, start = 3, end = 4) => {
  if (!account) return;
  return account.slice(0, start) + "***" + account.slice(account.length - end);
};
