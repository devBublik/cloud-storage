import { BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import store from './store';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import FavoriteList from './components/Like/FavoriteList';
import { useAppSelector } from './helpers/hooks';


function App() {
    const [isModal, setModal] = useState(false);
    const {likeProducts} = useAppSelector(state => state.cart);
    return (
        
            <BrowserRouter>
                <div className="wrapper">
                    <div className="content">
                        <Header isModal={isModal} setModal={setModal}/>
                        <AppRouter/>
                    </div>
                    <Footer />
                    <Modal
                        isVisible={isModal}
                        title="Favorites"
                        content={<FavoriteList products={likeProducts}/>}
                        onClose={() => setModal(false)}
                    />
                </div>
            </BrowserRouter>
  );
}

export default App;
