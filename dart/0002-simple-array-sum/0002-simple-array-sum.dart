// Given an array of integers, find the sum of its elements.
void main () {
  List <int> numbers = [1, 2, 3, 4, 10, 11];
  num sum = simpleArraySum(numbers);
  print(sum);
}

num simpleArraySum(List simpleArray) {
  num suma = 0;
  simpleArray.forEach((number) {
    suma = suma + number;
  });
  return suma;
}
