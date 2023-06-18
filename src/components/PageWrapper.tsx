import React from 'react';
import Container from './Container';

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return (
    <div className="px-4 lg:pl-[29px] lg:pr-[27px]">
      <div className="bg-gradient rounded-[6px] py-4 lg:py-[44px] h-[calc(100vh-135px)]">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default PageWrapper;
