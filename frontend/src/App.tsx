import { useGetHello } from "./api";
import "./App.css";

function App() {
  const { message, error } = useGetHello(); // カスタムフックを呼び出し

  if (error) {
    return <div>{error}</div>; // エラーがあれば表示
  }

  if (!message) {
    return <div>Loading...</div>; // メッセージがまだない場合（ロード中）
  }

  return <div>{message}</div>; // メッセージを表示
}

export default App;
