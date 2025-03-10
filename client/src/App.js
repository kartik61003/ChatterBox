import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./App.css"


const clientId = '' // enter client id

function App() {
  return (
   <>
     <GoogleOAuthProvider clientId={clientId}>

      <AccountProvider>
          <Messenger/>
      </AccountProvider>

     </GoogleOAuthProvider>

   </>
  );
}

export default App;
