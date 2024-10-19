import React, { useEffect } from 'react';

const Redirect = () => {
  useEffect(() => {
    // Мгновенное перенаправление
    window.location.href = 'https://telegra.ph/underground-drone-10-19'; // Ссылка, на которую будет перенаправление
  }, []);

  return null; // Не отображаем ничего на странице
};

export default Redirect;
