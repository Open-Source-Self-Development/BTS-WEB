import React from 'react';
import View from '@/views';
import Sidebar from '@/components/shared/Sidebar';
import Header from '@/components/shared/Header';

const AppLayout = (props) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <View {...props} />
      </div>
    </div>
  );
};

export default AppLayout;
