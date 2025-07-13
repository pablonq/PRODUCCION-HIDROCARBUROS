

fetch("https://datos.energia.gob.ar/datastore/odata3.0/cb5c0f04-7835-45cd-b982-3e25ca7d7751?$top=10", {
  headers: { "Accept": "application/json" }
})
  .then(res => res.text())
  .then(text => {
    console.log("Respuesta recibida:", text);
    try {
      const data = JSON.parse(text);
      console.log(data);
    } catch (err) {
      console.error("No es JSON válido:", err);
    }
  })
  .catch(err => console.error("Error:", err));