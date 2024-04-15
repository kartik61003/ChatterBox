import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./App.css"


const clientId = '737771720330-n79m1a4ou5b4vq1h7uc6lcs3p7etgg58.apps.googleusercontent.com'

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
