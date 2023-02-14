function* meinCounterGenerator() {
    let i = 0;
    console.log("Aufruf Generatorfunktion");
    while (true) {
      console.log(`i = ${i} - next() vom Generator aufgerufen`);  
      yield i++;
    }
  }
  
  const gen = meinCounterGenerator();
  
  function simuliereAsync(){
    var i = gen.next().value; 
    if (i < 5) 
    setTimeout(simuliereAsync,1000);
  }
  
  simuliereAsync();