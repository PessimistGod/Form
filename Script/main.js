document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const form1Div = document.getElementById('form1');
    const form2Div = document.getElementById('form2');
    const priceValueElement = document.getElementById('priceValue');

    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            form1Div.style.display = 'none';
            form2Div.style.display = 'none';

            const selectedDivId = this.value;

            if (selectedDivId === 'form1') {
                form1Div.style.display = 'block';
                priceValueElement.textContent = `$24.99`;
            } else if (selectedDivId === 'form2') {
                form2Div.style.display = 'block';
                priceValueElement.textContent = `$24.99 + $3`;
            } else {
                console.error('Error: Unsupported form selected');
                priceValueElement.textContent = 'Error';
            }
        });
    });

    const defaultSelectedDivId = document.querySelector('input[name="formSelector"]:checked').value;
    if (defaultSelectedDivId === 'form1') {
        form1Div.style.display = 'block';
        priceValueElement.textContent = `$24.99`;
    } else if (defaultSelectedDivId === 'form2') {
        form2Div.style.display = 'block';
        priceValueElement.textContent = `$24.99 + $3`;
    } else {
        console.error('Error: Unsupported default form selected');
        priceValueElement.textContent = 'Error';
    }
});
