import { Button } from "antd";
import { useAuth } from "../../hooks";

export const Home = () => {
  const { logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={handleLogout}>Sair</Button>
    </div>
  );
};
