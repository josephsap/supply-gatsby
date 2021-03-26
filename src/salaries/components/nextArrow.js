import React from 'react';

function NextArrow(props) {
  const { className, onClick } = props;
  console.log(className, 'next arr class name');
  return <div className={className} onClick={onClick} />;
}

export default NextArrow;
