// For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// a < b < c
// Find the product abc.

function pythagoreanTriplet(num) {
  console.log(num)
  for (let i = 1; i < Math.floor(num/3); i++) {
    for (let j = i+1; j < Math.floor(num/2); j++) {
      let k = Math.floor(Math.sqrt((i*i) + (j*j)))
      if ((k*k) === (i*i) + (j*j)) {
        if ((k + i + j) === num) {
          console.log(i, j, k, 'stop')
          return k * i * j
        }
      } 
    }
  }
}

console.log(pythagoreanTriplet(1000))