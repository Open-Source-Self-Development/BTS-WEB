import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthority from '@/utils/hooks/useAuthority';

const AuthorityGuard = (props) => {
  const { userAuthority = [], authority = [], children, access = [] } = props;
  const dizi=[userAuthority]
  const roleMatched = useAuthority(dizi, authority);
  return roleMatched  ? children : <Navigate to="/yetkiniz-yok" />;
};

export default AuthorityGuard;
