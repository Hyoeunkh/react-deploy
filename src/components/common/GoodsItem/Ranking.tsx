import styled from '@emotion/styled';

import { DefaultGoodsItems, type DefaultGoodsItemsProps } from './Default';

import { breakpoints } from '@/styles/variants';

type Props = {
  rankingIndex: number;
} & DefaultGoodsItemsProps;

export const RankingGoodsItems = ({ rankingIndex, ...props }: Props) => {
  return (
    <Wrapper>
      <RankingLabel rankingIndex={rankingIndex}>{rankingIndex}</RankingLabel>
      <DefaultGoodsItems {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const RankingLabel = styled.span<Pick<Props, 'rankingIndex'>>`
  position: absolute;
  z-index: 2;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  top: 4px;
  left: 4px;
  color: #fff;
  background-color: ${({ rankingIndex }) => (rankingIndex <= 3 ? '#fd7364' : '#bbb')};

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 30px;
    min-width: 30px;
    height: 30px;
    border-radius: 6px;
    font-size: 18px;
  }
`;
