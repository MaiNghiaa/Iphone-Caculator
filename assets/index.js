var numbers = document.querySelectorAll(".numbers");
var Output = document.getElementById("output");
var Input = document.getElementById("input");
let input = "";

for (var key of numbers) {
  const value = key.getAttribute("value");

  key.addEventListener("click", () => {
    if (value == "AC") {
      input = "";
      Input.innerHTML = "";
      Output.innerHTML = "";
    } else if (value == "Del") {
      input = input.slice(0, -1);
      Input.innerHTML = input;
    } else if (value == "=") {
      if (!input) {
        return false;
      } else {
        var result = parseFloat(eval(input).toFixed(2));
        Output.innerHTML = CleanOutput(Pretier_out(result));
      }
    } else {
      input += value;
      Input.innerHTML = input;
    }
  });
}
function CleanOutput(output) {
  let output_string = output.toString();
  let decimal = output_string.split(".")[1];
  output_string = output_string.split(".")[0];

  let output_array = output_string.split("");

  if (output_array.length > 3) {
    for (let i = output_array.length - 3; i > 0; i -= 3) {
      output_array.splice(i, 0, ",");
    }
  }

  if (decimal) {
    output_array.push(".");
    output_array.push(decimal);
  }

  return output_array.join("");
}

function Pretier_out(value) {
  let result_string = value.toString();
  //   tìm kiếm kí tự trong chuỗi
  let dotIndex = result_string.indexOf(".");
  if (
    dotIndex !== -1 &&
    dotIndex < result_string.length - 1 &&
    result_string.charAt(dotIndex + 1) === "0"
  ) {
    result_string =
      result_string.slice(0, dotIndex) + result_string.slice(dotIndex + 2);
  }
  return result_string;
}

// hàm lấy giờ hiện tại
function datetime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  var times = `${hours}:${minutes}`;
  let time = document.querySelector(".time");
  time.innerHTML = times;
}
setInterval(datetime(), 1000);
