
    function munculSekali(input) {
        const digitCount = {};
      
        // Hitung berapa kali setiap angka muncul dalam string
        for (const digit of input) {
          digitCount[digit] = (digitCount[digit] || 0) + 1;
        }
      
        // Saring angka-angka yang muncul hanya satu kali
        const uniqueNumbers = [];
        for (const digit in digitCount) {
          if (digitCount[digit] === 1) {
            uniqueNumbers.push(Number(digit));
          }
        }
      
        return uniqueNumbers;
      }

 
 
 console.log(munculSekali("1234123"))    // [4]
 console.log(munculSekali("76523752"))   // [6, 3]
 console.log(munculSekali("12345"))      // [1 2 3 4 5]
 console.log(munculSekali("1122334455")) // []
 console.log(munculSekali("0872504"))    // [8 7 2 5 4]