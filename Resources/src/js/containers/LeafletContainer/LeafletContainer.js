import { connect } from 'react-redux'
import { selectPoint } from '../../store/actions'
import { validatePoint } from '../../api'
import { getPoint } from '../../api/utils'
import { Leaflet } from '../../components'

const mapStateToProps = (state) => {
    const {
        center,
        current,
        points,
        configs: { listPaneShow, zoom }
    } = state;

    return {
        center,
        current,
        points,
        listPaneShow,
        zoom
    }
};

const mergeProps = (stateProps, { dispatch }) => ({
    ...stateProps,
    onClick(id) {
        getPoint(dispatch, stateProps.points, id);
        validatePoint(id);
    },
    onSelectPoint(pointId) {
        if (stateProps.current !== pointId) {
            dispatch(selectPoint(pointId));
        }
    }
});

export default connect(mapStateToProps, null, mergeProps)(Leaflet)
