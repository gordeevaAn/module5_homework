let animals = new Map ([
    ["lion", "wild"],
    ["dog", "pet"],
    ["parrot", "bird"],
    ["hamster", "rodent"]
  ]);
  for (const[key, value] of animals) {
    console.log(`${key} = ${value}`);
  }
  