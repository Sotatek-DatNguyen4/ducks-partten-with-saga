import React from 'react';
import DefaultLayout from '../../components/layout/default-layout';
import './style.scss';
import { Button } from 'antd';

const Home = () => {
  return (
    <DefaultLayout>
      <div className="home-page">Home page</div>
      <Button type="primary">Primary Button </Button>
    </DefaultLayout>
  );
};

export default Home;
