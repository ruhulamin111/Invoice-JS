
const buyerDetails = document.getElementById('detail-submit-btn').addEventListener('click', function (event) {
    const buyerInput = document.getElementById('buyer-details-input').value;
    const buyerOutput = document.getElementById('buyer-info');
    buyerOutput.innerText = buyerInput;
    buyerInput.value = '';

})