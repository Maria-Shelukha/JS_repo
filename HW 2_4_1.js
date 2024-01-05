let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];
let expectedRes = [100,12345643,123]

function sumExp (expences) { 
    let sum = 0 
    for (let i = 0; i < expencesExamples[0].yearlyExpences.length; i++) { 
        if (expencesExamples[0].yearlyExpences[i] > 1000){
            sum += expencesExamples[0].yearlyExpences[i]
        }   
      }
      return sum
}

console.log(sumExp(expencesExamples[0].yearlyExpences))

function testSumExp(expectedRes, expences) {
    let actualRes = sumExp(expences)
    if (actualRes === expectedRes){
        console.log('correct')
    } else {
        console.log ('incorrect')
    }
}

expencesExamples.forEach((testExpensesEx, index) =>{
    testSumExp(expectedRes[index],testExpensesEx.yearlyExpences)
})
