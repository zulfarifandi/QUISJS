function secondLargest(arry) {
    if (arry.length < 2) {
        return;
    }
    // Mengurutkan array secara menurun
    arry.sort((a, b) => b - a);
    // Mengembalikan angka terbesar kedua
    return arry[1];
}
console.log(secondLargest([10, 5, 20, 8])); // Output: 10
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
