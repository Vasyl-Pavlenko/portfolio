import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  justify-items: center;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 20px 0 32px;
  }

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 24px;
  padding: 24px;
  min-height: 150px;
  text-align: center;

  @media ${props => props.theme.breakpoints.lg} {
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 12px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 8px;
    width: 260px;
  }
`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.01em;
  color: #fff;
  margin-bottom: 8px;
  text-align: center;

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 28px;
    line-height: 32px;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md} {
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.breakpoints.sm} {
    flex-wrap: wrap;
    width: 160px;
    justify-content: center;
  }
`;