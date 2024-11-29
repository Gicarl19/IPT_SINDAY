// Function to perform the MDAS calculation
function calculate() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const num3 = parseFloat(document.getElementById("number3").value);
    const num4 = parseFloat(document.getElementById("number4").value);
    const num5 = parseFloat(document.getElementById("number5").value);

    // Validate all inputs
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        document.getElementById("result").innerText = "Please enter valid numbers in all fields.";
        return;
    }

    // Perform MDAS operation
    let result = num1 * num2; // Multiplication
    result /= num3;          // Division
    result += num4;          // Addition
    result -= num5;          // Subtraction

    document.getElementById("result").innerText = "Final Result: " + result;
}

// Function to adjust font size
function changeFontSize(amount) {
    const resultParagraph = document.getElementById("para");
    const currentSize = window.getComputedStyle(resultParagraph).fontSize;
    const newSize = parseFloat(currentSize) + amount;
    resultParagraph.style.fontSize = newSize + "px";
}
