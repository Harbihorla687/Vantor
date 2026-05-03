function orderProduct(productName) {
  let phone = "234XXXXXXXXXX"; // your WhatsApp number
  let message = `Hello, I want to order ${productName}`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}