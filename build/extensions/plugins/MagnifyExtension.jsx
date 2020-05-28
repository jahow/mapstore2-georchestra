import React from "react";
import {connect} from "react-redux";
import {registerEventListener, unRegisterEventListener} from "../../../MapStore2/web/client/actions/map";
import mousePosition from "../../../MapStore2/web/client/reducers/mousePosition";
import map from "../../../MapStore2/web/client/reducers/map";
import {mapConfigHistory} from '../../../MapStore2/web/client/utils/MapHistoryUtils'

const radius = 100;

const style = {
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    position: "absolute",
    top: 50,
    left: 50,
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius
};

class MagnifyExtension extends React.Component {
    componentDidMount() {
        this.props.registerEventListener('mousemove', 'magnify')
    }

    render() {
        const {zoom, center, pointer} = this.props;
        return (<div style={style}>
            zoom is {zoom}<br/>
            center is {center.x},{center.y}<br/>
            pointer at {pointer.x},{pointer.y}
        </div>);
    }
};

export default {
    name: "MagnifyExtension",
    component: connect(state => ({
        zoom: state.map.present ? state.map.present.zoom : -1,
        center: state.map.present ? state.map.present.center : {x: 0, y: 0},
        pointer: state.mousePosition && state.mousePosition.position ? state.mousePosition.position : -1
    }), {registerEventListener, unRegisterEventListener}, (stateProps, dispatchProps) => {
        return {...stateProps, ...dispatchProps };
    })(MagnifyExtension),
    reducers: {
        map: mapConfigHistory(map),
        mousePosition
    }
};
