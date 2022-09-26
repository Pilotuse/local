import React from "react";
import {
  Chart,
  Interval,
  Coordinate,
  Legend,
  View,
} from "bizcharts";
import DataSet from "@antv/data-set";

const Clock = (props: any) => {
  const { queryConfig } = props;



  const { DataView } = DataSet;

  const userDv = new DataView();
  userDv.source(queryConfig.userData).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
  });

  return (
    <Chart placeholder={false} height={260} padding={20} autoFit>
      <Legend visible={false} />
      {/* 绘制图形 */}
      <View
        data={userDv.rows}
        scale={{
          percent: {
            formatter: (val) => {
              return `${(val * 100).toFixed(2)}%`;
            },
          }
        }}
      >
        <Coordinate type="theta" innerRadius={0.75} />
        <Interval
          position="percent"
          adjust="stack"
          color="type"
          label={['type', { offset: 40 }]}
        />
      </View>
    </Chart>
  );

}

export default Clock
