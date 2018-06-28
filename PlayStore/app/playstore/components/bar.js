import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'

class BarChartExample extends React.PureComponent {

    render() {

        const data = [
            {
                value: 50,
                svg: {
                    fill: '#388e3c',
                },
            },
            {
                value: 10,
                svg: {
                    fill: '#8bc34a',
                },
            },
            {
                value: 40,
                svg: {
                    fill:'#ffeb3b',
                },
            },
            {
                value: 95,
                svg: {
                    fill: '#ff9800',
                },
            },
            {
                value: 85,
                svg: {
                    fill: '#ff5722',
                },
            },
        ]

        return (
            // <View style={{ flexDirection: 'row', height: 90, paddingVertical: 16 }}>
            <BarChart
                style={{ height: 90 }}
                data={data}
                gridMin={0}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 20, bottom: 20 }}
                horizontal={true}
            >
            </BarChart>
            // </View>
        )
    }

}

export default BarChartExample