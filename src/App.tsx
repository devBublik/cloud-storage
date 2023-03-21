import { BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div className="wrapper">
                <div className="content">
                    <Header/>
                    <AppRouter/>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
   
    
  );
}

export default App;
