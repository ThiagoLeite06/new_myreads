import React from 'react';

import { Card, Shelf } from './styles';

const Home: React.FC = () => (
  <Card>
    <Shelf>
      <h1>Currently Reading</h1>
    </Shelf>
    <Shelf>
      <h1>Want to Read</h1>
    </Shelf>
    <Shelf>
      <h1>Read</h1>
    </Shelf>
  </Card>
);

export default Home;
