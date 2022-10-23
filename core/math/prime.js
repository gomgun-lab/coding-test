// 소수 = 1 또는 자기 자신만을 약수로 가지는 수

// O(n)
function isPrime_1(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// O(sqrt(n))
function isPrime_2(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// O(nlog(log n))
function getPrimes(num) {
  const result = [];
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = 2; j * i <= num; j++) {
        prime[j * i] = false;
      }
    }
  }

  for (let k = 0; k < num; k += 1) {
    if (prime[k]) {
      result.push(k);
    }
  }

  return result;
}

console.log(getPrimes(5));
