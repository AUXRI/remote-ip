import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {

    window.location.href = 'https://telegra.ph/underground-drone-10-19'; // Замените на нужный URL
  }, []);

  return null; // Компонент ничего не отображает
}