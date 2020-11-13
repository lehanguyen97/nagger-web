import React from 'react';

type DefaultElementProps = { attributes: any };

const DefaultElement: React.FC<DefaultElementProps> = props => {
  return (
    <p {...props.attributes}>
      {props.children}
    </p>
  );
};

export default DefaultElement;