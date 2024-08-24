import React from 'react';
const PageContainer = (props) => {
  const { children } = props;
  return (
    <div className="max-h-full overflow-hidden !overflow-y-hidden">
     {children}
    </div>
  );
};

export default PageContainer;
