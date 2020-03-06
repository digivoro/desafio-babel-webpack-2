import funcionUno from "./one";
import funcionDos from "./two";

const funcionTres = (arreglo, objeto) => {
  let result = {
    status: "OK",
    one: undefined,
    two: undefined
  };
  result.one = funcionUno(arreglo);
  result.two = funcionDos(objeto);
  return result;
};

const testArreglo = [1, 4, 23, -4, "one", 6, 0, 1.1, 3.1415];
const testObjeto = {
  nombre: "Felipe Castro Richter",
  edad: 30,
  oficio: "webdev"
};

console.log(funcionTres(testArreglo, testObjeto));
