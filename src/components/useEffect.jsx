import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Створюємо функціональний компонент UserFetcher
const UserFetcher = ({ userID }) => {
  // Створюємо стани для завантаження даних, показу повідомлень про завантаження та повідомлення про помилку
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Виконуємо функцію useEffect з функцією fetchData як аргументом
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
        setData(response.data);
      } catch (error) {
        setError('Не вдалося завантажити дані');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userID]); // Виконується при зміні userID

  // Показуємо повідомлення про завантаження
  if (loading) {
    return <div>Завантаження даних...</div>;
  }

  // Показуємо повідомлення про помилку
  if (error) {
    return <div>{error}</div>;
  }

  // Показуємо дані користувача або повідомлення про їх відсутність
  return (
    <div>
      {data ? (
        <div>
          <h2>Інформація про користувача</h2>
          <p>Ім'я: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Телефон: {data.phone}</p>
        </div>
      ) : (
        <div>Дані відсутні</div>
      )}
    </div>
  );
};

export default UserFetcher;
