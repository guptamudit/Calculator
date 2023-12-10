var result = document.getElementById("result");

//display numbers in input field
function display(number) {
  result.value += number;
}

// function to calculate
// the final result when clicking on "equal"
function calc() {
  var final_num = result.value;
  var final_result = eval(final_num); // eval func to calculate the argument
  result.value = final_result;
}

// function to clear the input field
function clrsrc() {
  result.value = "";
}

// function to delete a value from input field
function del() {
  result.value = result.value.slice(0, -1);
}
