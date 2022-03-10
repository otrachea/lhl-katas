const checkAir = function (samples, threshold) {
  
  let dirty = 0;

  samples.forEach(sample => {
    if (sample === 'dirty') dirty++;
  });

  if (dirty / (samples.length) > threshold) return 'Polluted';
  return 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
