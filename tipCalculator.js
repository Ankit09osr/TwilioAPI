// Function to calculate tip at 10%, 15%, 20% and return Total Price.
module.exports = function(amount) {
  amount = Number(amount);
  if (isNaN(amount) || (amount <= 0)) {
    return 'Enter valid Number!';
  }

  const tipAtTen = amount * 0.10;
  const tipAtFifteen = amount * 0.15;
  const tipAtTwenty = amount * 0.20;

  return `\n\n Bill Amount: ${amount}\nTip at 10%: ${tipAtTen} Total Price: ${amount + tipAtTen}\nTip at 15%: ${tipAtFifteen} Total Price: ${amount + tipAtFifteen}\nTip at 20%: ${tipAtTwenty} Total Price: ${amount + tipAtTwenty}`;
};