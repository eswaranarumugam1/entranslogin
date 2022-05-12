import React, { useContext, useEffect } from 'react';
import { TitleContext } from './TitleProvider';

const Titlewraper = ({ Component, title }) => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle(title);
  }, [title]);
  return <Component />;
};

export default Titlewraper;
