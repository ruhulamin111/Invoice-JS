
const buyerDetails = document.getElementById('detail-submit-btn').addEventListener('click', function (event) {
    const buyerInput = document.getElementById('buyer-details-input').value;
    const buyerOutput = document.getElementById('buyer-info');
    buyerOutput.innerText = buyerInput;
    buyerInput.value = '';
})

const productDetails = document.getElementById('add-details-btn').addEventListener('click', function (event) {
    const productName = document.getElementById('item-name-input').value;
    const productPrice = document.getElementById('item-price-input').value;
    const productQunatity = document.getElementById('item-quantity-input').value;
    const productTotal = productPrice * productQunatity;

    const productOutputContainer = document.getElementById('info-table');
    const productOutputTr = document.createElement('tr');
    productOutputTr.innerHTML = `
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQunatity}</td>
    <td class="totals">${productTotal}</td>
    `;
    productOutputContainer.appendChild(productOutputTr);
    subTotal();
})

const subTotal = () => {
    const subTotalsOutput = document.getElementById('sub-total');
    const subTotals = document.getElementsByClassName('totals');
    let subTotal = 0;
    for (const total of subTotals) {
        const price = parseInt(total.innerText);
        subTotal = subTotal + price;
    }
    subTotalsOutput.innerText = subTotal;

    const taxAmount = subTotal * 0.1;
    const taxOutput = document.getElementById('tax');
    taxOutput.innerText = taxAmount;

    const groundTotal = subTotal + taxAmount;
    const groundOutput = document.getElementById('grand-total');
    groundOutput.innerText = groundTotal;
}
/* 
const tax = (subTotal) => {
    const taxAmount = subTotal * 0.1;
    const taxOutput = document.getElementById('tax');
    taxOutput.innerText = taxAmount;
} */