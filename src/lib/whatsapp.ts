import type { Order } from '../types';

export const formatWhatsAppMessage = (order: Order): string => {
  let message = `Hi Shahi's Flavour House! I'd like to order:\n\n`;

  order.items.forEach((item) => {
    message += `🍗 ${item.product.name} (₹${item.product.price}) x${item.quantity}\n`;
  });

  message += `\n💰 Total: ₹${order.total}\n\n`;
  message += `📍 Delivery Address: ${order.delivery_address}\n`;
  message += `📅 Preferred Date: ${order.delivery_date}\n\n`;
  message += `Thanks!`;

  return message;
};

export const getWhatsAppLink = (message: string, phoneNumber: string = '918147191739'): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
