export const withdraw = (clients, balances, client, amount) => {
    let index = clients.findIndex(i => i === client);
    let balance = balances[index];
    if (balance >= amount) {
      balances[index] = balance - amount;
      return balance - amount;
    }
    else return -1;
  };