function myFunction(a, b) {
  if (a === 0 && b === 0) {
    return NaN; //Explicitly handle the case of both parameters being zero
  } else if (a === 0 || b === 0) {
    return 0;
  }
  return a / b;
}