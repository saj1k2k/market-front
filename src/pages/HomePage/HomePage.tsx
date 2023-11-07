import React from 'react';
import {Helmet} from "react-helmet";

export const HomePage: React.FC = () => {
    return (
    <>
        <Helmet>
            <title>
                Главная
            </title>
        </Helmet>
        Главная
    </>
    );
};

export default HomePage;