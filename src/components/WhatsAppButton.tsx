import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "5541988319759";
  const message = encodeURIComponent("Vim a partir do site da Dra Flávia Basilio, gostaria de mais informações sobre o transplante capilar. Me chamo ");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 transition-all duration-300 hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043s.188-.188.238-.289l.332-.506c.101-.144.202-.121.39-.072s1.011.477 1.184.564c.173.087.287.129.332.202s.045.274-.1.405z"/>
      </svg>
      <span className="hidden md:inline">Agende sua consulta</span>
    </a>
  );
};

export default WhatsAppButton; 