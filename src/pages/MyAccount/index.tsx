import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { Spacing } from '@/components/common/layouts/Spacing';
import { WishList } from '@/components/features/MyAccount/WishList';
import { useAuth } from '@/provider/Auth';
import { authSessionStorage } from '@/utils/storage';

export const MyAccountPage = () => {
  const authInfo = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    authSessionStorage.set(undefined);
    navigate('/');
  };

  return (
    <Wrapper>
      {authInfo?.email}님 안녕하세요! <Spacing height={64} />
      <WishList />
      <Button
        size="small"
        theme="darkGray"
        onClick={handleLogout}
        style={{
          maxWidth: '200px',
        }}
      >
        로그아웃
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 80px 0 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;
`;
