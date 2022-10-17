import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import client from '../services/api';

const fishesContext = createContext({
  photos: {},
});

const useFish = () => {
  const [loading, setLoading] = useState(true);
  const [fishes, setFishes] = useState([]);

  const getFishes = async () => {
    const { data } = await client.get(process.env.REACT_APP_API)

    setFishes(data)
    setLoading(false)
  }


  return {
    loading,
    fishes,
    getFishes
  };
};

export function FishProvider({ children }) {
  const fish = useFish();

  return (
    <fishesContext.Provider value={fish}>{children}</fishesContext.Provider>
  );
}

export default function UsersConsumer() {
  return React.useContext(fishesContext);
}

FishProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
