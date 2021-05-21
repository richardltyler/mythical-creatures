class VendingMachine {
  constructor({id, isBroken}) {
    this.id = id;
    this.isBroken = isBroken;
    this.snacks = [];
  };

  addSnacks(newSnack) {
    const isDuplicate = this.snacks.some(snack => snack.name === newSnack.name);

    if (!isDuplicate) {
      this.snacks.push(newSnack);
      
    } else {
      return 'Sorry, that snack is already stocked! Try adding a different snack.';
    };
  };

  purchaseSnack(snackName, cost) {
    const snackToPurchase = this.snacks.find(snack => snack.name === snackName);

    return (
      !!snackToPurchase.itemsInStock  
        ? this.dispenseSnack(snackToPurchase, cost)
        : 'Sorry, no items in stock. Try another item.'
    );
  };

  dispenseSnack(snackToPurchase, cost) {
    let change = 0;

    if (snackToPurchase.price < cost) {
      this.snacks = this.snacks.reduce((acc, snack) => {
        if (snack.name === snackToPurchase.name) {
          snack.removeItem();
          change = cost - snack.price;
        };
  
        acc.push(snack);
        return acc;
      }, []);

      return `Success! Here is $${change} back!`;

    } else {
      return 'Sorry, not enough payment. Please add more money.';
    };
  };
};

module.exports = VendingMachine;
