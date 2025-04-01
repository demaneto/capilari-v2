export const getWhatsAppUrl = () => {
  const message = encodeURIComponent("Vim a partir do site da Dra Flávia Basilio, gostaria de mais informações sobre o transplante capilar. Me chamo ");
  return `https://wa.me/5541988319759?text=${message}`;
}; 