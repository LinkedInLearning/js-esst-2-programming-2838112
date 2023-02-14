function verzoegerteAntwort() {
    return new Promise(resolve => {
      var verzoeger=Math.round(Math.random()*10);
      console.log(verzoeger);
      setTimeout(() => {
        resolve(verzoeger);
      }, verzoeger*1000);
    });
  }
  
  async function asyncAufruf() {
    console.log('Aufruf gestartet');
    const result = await verzoegerteAntwort();
    console.log(result);
    
  }
  
  asyncAufruf();
  