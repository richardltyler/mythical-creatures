var assert = require('chai').assert;
var Shop = require('../src/shop');
var Part = require('../src/part');
var Being = require('../src/being');
var Ship = require('../src/ship');

describe('Shop', function() {
  it('should have a name', function() {
    var shop1 = new Shop({ name: 'EZ-way' });
    var shop2 = new Shop({ name: 'Conogo' });

    assert.equal(shop1.name, 'EZ-way');
    assert.equal(shop2.name, 'Conogo');
  });

  it('should have no inventory by default', function() {
    var newShop = new Shop({ name: 'Conogo' });

    assert.deepEqual(newShop.inventory, {});
  });

  it('should be able to add a piece of inventory', function() {
    var computer = new Part({ name: 'comp', type: 'computer', value: 200 });
    var newShop = new Shop( {name: 'Conogo' });

    newShop.addInventory(computer);

    assert.include(Object.values(newShop.inventory), computer);
  });

  it('should be able to add another piece of inventory', function() {
    var hyperdrive = new Part({ name: 'Z1', type: 'hyperdrive', value: 200 });
    var newShop = new Shop({ name: 'Conogo' });

    newShop.addInventory(hyperdrive);

    assert.include(Object.values(newShop.inventory), hyperdrive);
  });

  it('can add multiple pieces of inventory', function() {
    var computer = new Part({ name: 'comp', type: 'computer', value: 200 });
    var hyperdrive = new Part({ name: 'hyperdrive', type: 'hyperdrive', value: 200 });
    var newShop = new Shop({ name: 'Conogo' });

    newShop.addInventory(computer);
    newShop.addInventory(hyperdrive);

    // remember, if what you're looking at is unfamiliar, look up
    // some documentation!
    assert.include(Object.values(newShop.inventory), computer);
    assert.include(Object.values(newShop.inventory), hyperdrive);
  });

  it('should only be able to add parts and food to the inventory', function() {
    var thing = { name: 'something', type: 'anything' };
    var otherThing = { name: 'else', quantity: 100 };
    var newShop = new Shop({ name: 'Conogo' });

    newShop.addInventory(thing);
    newShop.addInventory(otherThing);

    assert.deepEqual(newShop.inventory, {});
  });

  it('cannot outfit a ship without a captian', function() {
    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );
    var shell = new Part({ name: 'S-1', type: 'shell', value: 200 });
    var newShop = new Shop({ name: 'Conogo' });

    newShop.addInventory(shell);
    var result = newShop.outfitShip(fighter, 'shell');

    assert.equal(result, `cannot outfit a ship without a captian`);
  });

  it('should not be able to outfit a ship if the captian is broke', function() {
    var captain = new Being('Will', 'human');

    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        captain: captain,
        maxCrew: 2,
        odometer: 3340,
      }
    )
    var shell = new Part({ name: 'S-1', type: 'shell', value: 200 });
    var newShop = new Shop({ name: 'Conogo' });

    newShop.addInventory(shell);
    var result = newShop.outfitShip(fighter, 'shell');

    assert.equal(result, "you require 200 more credits to make this purchase");
  });

  it('should be able outfit a ship, and charge the captian', function() {
    var captain = new Being('Will', 'human');
    captain.credits = 1000;

    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        captain: captain,
        maxCrew: 2,
        odometer: 3340,
      }
    );
    var shell = new Part({ name: 'S-1', type: 'shell', value: 200 });
    var newShop = new Shop({ name: 'Conogo' });

    newShop.addInventory(shell);
    var result = newShop.outfitShip(fighter, 'shell');

    assert.equal(captain.credits, 800);
    assert.equal(fighter.parts.shell, shell);
    assert.isUndefined(newShop.inventory.shell);
    assert.equal(result, `shell added to ship`);
  });
})
