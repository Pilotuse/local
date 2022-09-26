import React from 'react'
import { Timeline, Grid } from '@arco-design/web-react';
import { IconCheck } from '@arco-design/web-react/icon';

const { Row, Col } = Grid;
const TimelineItem = Timeline.Item;

const HousingLoan = () => {
  // const defaultProps = {
  //   interestRate: 5.72,  // 利率,
  //   cycle: 19 * 12,
  //   startFromYear: '2021-05-01',
  //   loan: 50,
  //   unit: 'w'
  // }

  // const mapDate = () => {

  // }


  return (
    <div>
      <Row>
        <Col span={8}>
          q123
        </Col>
        <Col span={4}>
          <Timeline style={{ marginRight: 40 }}>
            <TimelineItem
              label='2020-04-12'
              dot={
                <IconCheck
                  style={{ fontSize: 12, padding: 2, boxSizing: 'border-box', borderRadius: '50%', backgroundColor: 'var(--color-primary-light-1)' }}
                />
              }
            >
              The first milestone
            </TimelineItem>
            <TimelineItem
              label='2020-05-17'
              dot={
                <IconCheck
                  style={{ fontSize: 12, padding: 2, boxSizing: 'border-box', borderRadius: '50%', backgroundColor: 'var(--color-primary-light-1)' }}
                />
              }
            >
              The second milestone
            </TimelineItem>
            <TimelineItem label='2020-06-22'>The third milestone</TimelineItem>
            <TimelineItem label='2020-06-22' dotColor='var(--color-fill-4)'>
              The third milestone
            </TimelineItem>
          </Timeline>
        </Col>
      </Row>
    </div>
  )
}

export default HousingLoan
