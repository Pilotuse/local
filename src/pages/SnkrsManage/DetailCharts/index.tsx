import React, { useEffect, useState } from 'react';
import { Spin, Tag } from '@arco-design/web-react';
import { Chart, Line, Legend, Point, Tooltip, Axis } from 'bizcharts';
import dayjs from 'dayjs'
import useChartTheme from '../../../utils/useChartTheme';
import styles from './index.module.less'

function ReportStuckRate(props: any) {
  const { snkrs } = props
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const chartTheme = useChartTheme();

  useEffect(() => {
    setLoading(true)
    const getDaysPrice = []
    const getTotalPrice = []
    // eslint-disable-next-line no-unused-expressions
    snkrs?.forEach((el: { date: string; price: string; name: string; id: number }) => {
      const temp = { x: '', y: '', name: '球鞋单价', snkrsName: el.name } as any
      temp.x = dayjs(el.date).format('YYYY-MM-DD')
      temp.y = el.price
      getDaysPrice.push(temp)
    })
    // eslint-disable-next-line no-unused-expressions
    snkrs?.forEach((el: { date: string; price: string; name: string; id: number }, index: number) => {
      const temp = { x: '', y: '', name: '球鞋总价', snkrsName: el.name } as any
      temp.x = dayjs(el.date).format('YYYY-MM-DD')
      temp.y = el.price + (getTotalPrice[index - 1]?.y || 0)

      getTotalPrice.push(temp)
    })
    const sortTotalPrice = [...getTotalPrice, ...getDaysPrice]
    setLoading(false)
    setData(sortTotalPrice)
  }, [snkrs])

  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Chart autoFit height={260} data={data} theme={chartTheme}>
        <Line position="x*y" color="name" />
        <Axis name="x" />
        <Axis name="y" label={{ formatter: val => `${val}` }} />
        <Point position="x*y" shape="circle" color="name" />
        <Tooltip shared showCrosshairs>
          {(title, items) => {
            return (
              <div className={styles["detail-charts-tooltips"]}>
                <div className={styles["detail-container"]}>{items[0].data.snkrsName}</div>
                <div className={styles["detail-container"]}>
                  <span style={{ marginRight: 10 }}>购买时间</span>
                  <span>{title}</span>
                </div>
                <div className={styles["detail-container"]}>
                  {
                    items.map((el, index) => {
                      return (
                        <div style={{ padding: '4px 0' }}>
                          <span style={{ marginRight: 10 }}>{el.name}</span>
                          <Tag size="small" key={index}>
                            <span style={{ color: '#FF7D00', fontWeight: 600 }}>¥</span>
                            {el.data.y}
                          </Tag>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            )
          }}
        </Tooltip>
        <Legend />
      </Chart>
    </Spin>
  );
}

export default ReportStuckRate;
