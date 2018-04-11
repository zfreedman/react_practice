export default function() {
  var book_list = [
    ["JavaScript: The Good Parts", 101],
    ["Harry Potter", 39],
    ["The Dark Tower", 85],
    ["Eloquent Ruby", 1]
  ];
  return book_list.reduce(function(arr, e) {
    arr.push({title: e[0], pages: e[1]});
    return arr;
  }, []);
}
