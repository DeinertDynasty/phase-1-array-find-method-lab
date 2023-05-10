const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];
  function superbowlWin(array) {
    const result = array.find(obj => obj.result === "W");
    return result ? result.year : undefined;
  }
  function writeCards(namesArray, event) {
    const thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
        // code your solution here
