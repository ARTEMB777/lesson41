import './App.css';
import UserFetcher from './components/useEffect';

function App() {
  return (
    <div>
      <h1>Дані користувача</h1>
      <UserFetcher userID={2} />
    </div>
  );
}

export default App;

