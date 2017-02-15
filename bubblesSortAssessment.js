function normalBubbleSort(arr) {
  let done = false;
  while (!done) {
    done = true;
    for (let i=1; i< arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        done = false;
        [arr[i-1], arr[i]]= [arr[i], arr[i-1]];
      }
    }
  }
  return arr;
}
// normalBubbleSort([1,0,3,7,6,8,4,2,2,2,2])
