// Code your solutions in this file
function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
}
  
    function writeCards(names) {
        const messages = names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
        return messages;
      }
      
      
      const names = ['Ann', 'Joe', 'Rachel'];
      const thankYouMessages = writeCards(names);
      console.log(thankYouMessages);
    