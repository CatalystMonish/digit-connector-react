import logo from './logo.svg';
import './App.css';
import JobListing from './components/JobListing';
import Home from './pages/Home';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <div className="App bg-light-bg mx-auto max-w-[1000px]">
       <View className="App">
       <Button onClick={signOut}>Sign Out</Button>
        <Home/>
   
    </View>
    {/* <Home/> */}
    </div>
  );
}

export default withAuthenticator(App);
