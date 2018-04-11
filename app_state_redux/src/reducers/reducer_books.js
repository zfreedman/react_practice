export default function() {
  var titles = [
    "JavaScript: The Good Parts",
    "Harry Potter",
    "The Dark Tower",
    "Eloquent Ruby"
  ];
  return titles.reduce(function(arr, e) {
    arr.push({title: e});
    return arr;
  }, []);
}
