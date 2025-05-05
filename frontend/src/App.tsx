import { useGetHello } from "./api";
import "./App.css";
import { CreateUserForm } from "./components/CreateUserForm";

function Hello() {
  const result = useGetHello(); // カスタムフックを呼び出し

  if (!result) {
    return <div>Loading...</div>; // メッセージがまだない場合（ロード中）
  }

  if (!result.success) {
    return <div>{result.error.message}</div>; // エラーがあれば表示
  }

  return <div>{result.data}</div>; // メッセージを表示
}

function App() {
  return (
    <>
      <Hello />
      <CreateUserForm />
    </>
  ); // Hello コンポーネントを表示
}

export default App;
