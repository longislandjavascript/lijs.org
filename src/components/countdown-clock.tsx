import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import useCountdownClock from '../hooks/useCountdownClock';

interface ContainerProps {
  readonly bg: string;
  readonly color: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  margin: 10px auto;
  border-radius: 20px;
  background: ${props => props.bg || 'none'};
  color: ${props => props.color || 'black'};
  padding: 10px 20px;
`;

const UnitBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Unit = styled.span`
  font-size: 28px;
  font-weight: bold;
`;
export interface CountdownClockProps {
  readonly date: string | Date;
  readonly bg?: string;
  readonly color?: string;
}

const CountdownClock: React.SFC<CountdownClockProps> = ({
  date,
  bg,
  color,
}) => {
  const { days, hours, minutes, seconds } = useCountdownClock(date);

  const options: ReadonlyArray<{
    readonly title: string;
    readonly value: number;
  }> = [
    { title: 'Days', value: days },
    { title: 'Hours', value: hours },
    { title: 'Minutes', value: minutes },
    { title: 'Seconds', value: seconds },
  ];
  const renderUnits = options.map(({ title, value }) => {
    return (
      <UnitBox key={title}>
        <Title>{title}</Title>
        <Unit>{value}</Unit>
      </UnitBox>
    );
  });
  return (
    <Container bg={bg} color={color}>
      {renderUnits}
    </Container>
  );
};

export default CountdownClock;
