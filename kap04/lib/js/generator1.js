function* meinCounterGenerator() {
    let i = 0;
    console.log("Aufruf Generatorfunktion");
    while (true) {
      console.log(`i = ${i} - next() vom Generator aufgerufen`);  
      yield i++;
    }
  }
  
  const gen = meinCounterGenerator();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
 
  