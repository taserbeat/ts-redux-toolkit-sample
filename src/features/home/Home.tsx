import React from 'react';
import Header from '../../components/Header';

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div>
            <Header />

            <h1>#Home</h1>
        </div>
    )
}

export default Home;
