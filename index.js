const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "N/A"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "N/A"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"},
    { year: "2007", result: "N/A"},
    { year: "2006", result: "N/A"},
    { year: "2005", result: "N/A"},
    { year: "2004", result: "N/A"},
    { year: "2003", result: "N/A"},
    { year: "2002", result: "N/A"},
    { year: "2001", result: "N/A"},
    { year: "2000", result: "N/A"},
    { year: "1999", result: "N/A"},
    { year: "1998", result: "N/A"},
    { year: "1997", result: "N/A"},
    { year: "1996", result: "N/A"},
    { year: "1995", result: "N/A"},
    { year: "1994", result: "N/A"},
    { year: "1993", result: "N/A"},
    { year: "1992", result: "N/A"},
    { year: "1991", result: "N/A"},
    { year: "1990", result: "N/A"},
    { year: "1989", result: "N/A"},
    { year: "1988", result: "N/A"},
    { year: "1987", result: "N/A"},
    { year: "1986", result: "N/A"},
    { year: "1985", result: "N/A"},
    { year: "1984", result: "N/A"},
    { year: "1983", result: "N/A"},
    { year: "1982", result: "N/A"},
    { year: "1981", result: "N/A"},
    { year: "1980", result: "N/A"},
    { year: "1979", result: "N/A"},
    { year: "1978", result: "N/A"},
    { year: "1977", result: "N/A"},
    { year: "1976", result: "N/A"},
    { year: "1975", result: "N/A"},
    { year: "1974", result: "N/A"},
    { year: "1973", result: "N/A"},
    { year: "1972", result: "N/A"},
    { year: "1971", result: "N/A"},
    { year: "1970", result: "N/A"},
    { year: "1969", result: "W"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "L"},
    { year: "1965", result: "N/A"},
    { year: "1964", result: "N/A"},
    { year: "1963", result: "N/A"},
    { year: "1962", result: "N/A"},
    { year: "1961", result: "N/A"},
    { year: "1960", result: "N/A"}
  ]

//  function superbowlWin(record){
//     for (const winner of record){
//         if (winner.result === "W"){
//             return winner.year;
//         }
//     }
// }
//this is the only thing that works and I need to move on.

const superbowlWin = (records) => {
    let didTheyWin = records.find(records => records.result ==="W");
    return didTheyWin === undefined ? undefined :didTheyWin.year;
}




// const theyWon = array.find(array => array.result === "W");

// function superbowlWin(array){
//       if (array != record.result){
//         return undefined;
//       } else if (array.result = "W") {
//         return theyWon.year;
//        }
// }



// function superbowlWin(array){
//     if (array.result = "W") {
//       return theyWon;
//     } else if (array = ""){
//     return undefined;
//       } 
// }



// This does not pass the test, but it takes just one argument as the value of "result", whether it is "W" or "L" or "N/A" and it logs each year that they occur. THIS is what I thought the assignment wanted. It definitely did not say anything of that sort, but it's what made sense to me as far as pulling data. The test will not pass this because it only wants to see the first instance of a "W" and returns the first instance? I think using console.log in the function allows it to return all results as a list.

// function superbowlWin(fate){
//     for (const winner of record){
//         if (winner.result === fate){
//             console.log(winner.year);
//         }
//     }
// }
// console.log(superbowlWin("W"));



// this is the same as above but with just a parameter of record. It passes the test but it isn't using the find function at all... boooo

// function superbowlWin(record){
//     for (const winner of record){
//         if (winner.result === "W"){
//             return winner.year;
//         }
//     }
// }