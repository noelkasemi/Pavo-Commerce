

export const generateCode = (product) => {
    const min = 1000;
    const max = 10000;
    return Math.floor(Math.random() * (max - min + 1)) + min * product.id;
  };
  
  export const generateTax = () => {
    const min = 1;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  export const calculateSave = (product) => {
    const discountPercentage = 50;
    return (product.price / 100) * discountPercentage;
  };
  