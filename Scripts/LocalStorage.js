function saveinfomation() {
  const customerName = document.getElementById('customer-name').value;
  const customerEmail = document.getElementById('customer-email').value;
  const customerMessage = document.getElementById('customer-message').value;

  const data = {
    customerName,
    customerEmail,
    customerMessage,
  };
  localStorage.setItem('mohiPortfolioData', JSON.stringify(data));
}

function loadDataFromLocalStorage() {
  if (localStorage.getItem('mohiPortfolioData') !== null) {
    const data = JSON.parse(localStorage.getItem('mohiPortfolioData'));
    document.getElementById('customer-name').value = data.customerName;
    document.getElementById('customer-email').value = data.customerEmail;
    document.getElementById('customer-message').value = data.customerMessage;
  }
}

loadDataFromLocalStorage();