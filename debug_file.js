const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; 
    /*Заданы два параметра а=25, b=30.
     Внутри функции объявляем переменную bonus, которая underfied т.к не задано никакое значение этой переменной
     Далее вычисляется сумма параметров а и b  и их сумма передается в переменную sum*/
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;
    /*Проверяется условие, что сумма больше 50. Т.к условие верное, то переменной bonus присваивается значение 50
    Если бы sum было меньше 50, то сумма бонуса была бы равна переменной sum*/
    return bonus;
    };

    calculateBonus(25, 30);