import React, { useContext, useEffect } from 'react';
import { TitleContext } from './TItleProvider';

const Titlewraper = ({ Component, title }) => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle(title);
  }, [title]);
  return <Component />;
};

export default Titlewraper;
