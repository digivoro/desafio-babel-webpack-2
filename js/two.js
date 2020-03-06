const funcionDos = objeto => {
  try {
    return JSON.stringify(objeto);
  } catch (error) {
    console.log(error.message);
  }
};

export default funcionDos;
