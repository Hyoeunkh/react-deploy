import styled from '@emotion/styled';

import { Spinner } from '../Spinner';

import { useIntersectionObserver, type UseIntersectionObserverProps } from '@/hooks/useIntersectionObserver';

type Props = {
  children?: React.ReactNode;
} & UseIntersectionObserverProps;

export const VisibilityLoader = ({ children = <Spinner />, ...observerProps }: Props) => {
  const { ref } = useIntersectionObserver(observerProps);

  return (
    <Wrapper ref={ref}>
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: '32px 48px';
`;
