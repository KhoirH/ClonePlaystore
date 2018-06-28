import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'

class ProgressCircleExample extends React.PureComponent {

    render() {

        return (
            <ProgressCircle
                style={ { height: 90 } }
                progress={ 0.9 }
                progressColor={'#43a047'}
                startAngle={ Math.PI * 1.5 }
                endAngle={ -Math.PI * 0.5 }
            />
        )
    }

}

export default ProgressCircleExample