// eslint-disable-next-line no-unused-vars
import { useAuth0 } from "@auth0/auth0-react";
// import viteLogo from '/vite.svg'
// import { AllRoutes } from './routes/AllRoutes'
// import SideBar from './components/SideBar'
// import MainTabCard from './components/MainTabCard'
 import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)
  // const { loginWithRedirect, logout, user } = useAuth0();
  // console.log(user);
  return (
    <>
      {/* {user ? (
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => logout()}
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      )} */}
      <Home/> 
      {/* <MainTab/> */}
    </>
  );
}

export default App;
