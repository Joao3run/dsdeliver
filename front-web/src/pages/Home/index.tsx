import React from 'react';
import './styles.css';
import { ReactComponent as MainImage } from '../../assets/img/main.svg';
import Footer from '../../componentes/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br/> que entregamos <br/> para você!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Escolha o seu pedido e em ppoucos minutos <br/>
                            levaremos na sua porta
                        </h3>
                        <Link to="/orders" className="home-btn-order">
                            Fazer Pedido
                        </Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Home;
