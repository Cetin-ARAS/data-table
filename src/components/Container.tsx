import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className = '' }: Props) => {
  return <div className={`${className} container mx-auto max-w-[1446px] px-4`}>{children}</div>;
};

export default Container;
