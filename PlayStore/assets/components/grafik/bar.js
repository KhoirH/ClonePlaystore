import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'

class BarChartExample extends React.PureComponent {

    render() {

        const data = [ 200, 40, 10, 0,5 ]

        return (
            <View style={{ flexDirection: 'row', height: 80, paddingVertical: 16 }}>
                <BarChart
                    style={{ flex: 1, marginLeft: 8 }}
                    data={data}
                    horizontal={true}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)', }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.5}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL}/>
                </BarChart>
            </View>
        )
    }

}

export default BarChartExample