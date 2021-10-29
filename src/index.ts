let num1: string = document.getElementById("num1");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numUno: number = Number(num1.value);
  switch (numUno) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
     console.log("el mes" , numUno, "tiene 31 dias");
      break;
    
    case 11:
    case 4:
    case 6:
    case 9:
      console.log("el mes", numUno,"tiene 30 dias");
      break;
      case 2:
      console.log("el mes", numUno,"tiene 28 dias");
      break;
    default:
      console.log("el mes no existe");
  }
});