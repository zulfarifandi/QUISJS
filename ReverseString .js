function reverseString(inputString) {
    // Menggunakan method split() untuk memisahkan karakter
    // Menggunakan method reverse() untuk membalik urutan karakter
    // Menggunakan method join() untuk menggabungkan kembali karakter
    return inputString.split('').reverse().join('');
  }
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(reverseString("world")); // Output: "dlrow"