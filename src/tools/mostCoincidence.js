// function mostCoincidence(array) {
//   return array.reduce(
//     (total, current, index, arr) =>
//       arr.filter(value => value === total).length >=
//       arr.filter(value => value === current)
//         ? total
//         : current,
//     null
//   );
// }

function mostCoincidence(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter(v => v === a).length - arr.filter(v => v === b).length
    )
    .pop();
}

export default mostCoincidence;
