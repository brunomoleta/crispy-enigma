const array = [true, "Hello World", false, "Lorem Ipsum", 6, 3.141592653589793];
const toFind = false;

const find = (array, element) => {
//   console.log(array);
//   console.log(element);
  array.find(arrElement => arrElement === element)
    ? console.log(array.indexOf(element)) 
    : console.log("Not found");
};

find(array, toFind);