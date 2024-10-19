import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {
    // Сначала перенаправляем на первую ссылку
    window.location.href = 'https://telegra.ph/underground-drone-10-19';
    
    // Устанавливаем таймер на мгновенное перенаправление на вторую ссылку
    const timer = setTimeout(() => {
      window.location.href = 'https://whaterdrone.netlify.app/'; // Вторая ссылка
    }, 0); // 0 миллисекунд для мгновенного перехода

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);

  return null; // Компонент ничего не отображает
}