const value1 =20;
let max = 50; 
let value2 = Math.floor(Math.random() * max);
console.log(value1+value2/5+17);
/* В JavaScript каждый оператор имеет соответствующий номер приоритета. 
Т.к у деления номер приоритета выше (13), чем у сложения(12), то сначала выполняется деление, потом сложение
Таблица приоритетов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */