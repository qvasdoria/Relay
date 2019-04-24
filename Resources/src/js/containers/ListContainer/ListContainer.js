import { connect } from 'react-redux'
import { selectPoint, changePosition, changeListPaneVisible } from '../../store/actions'
import { getPointById } from '../../api/utils'
import { List } from '../../components'

const mapStateToProps = (state) => {
    const {
        points,
        current,
        loader,
        configs: { listPaneShow }
    } = state;

    return {
        points,
        current,
        loader,
        listPaneShow
    }
};

const mapToDispatch = (dispatch) => ({ dispatch });

const mergeProps = (stateProps, { dispatch }) => {
    const isSmallScreen = window.innerWidth < 1024;

    return {
        ...stateProps,
        onClickToggleList (visible) {
            if (!isSmallScreen) {
                window.dispatchEvent(new Event('resize'));
            }
            dispatch(changeListPaneVisible(visible));
        },
        onSelectPoint (pointId) {
            if (stateProps.current !== pointId) {
                const point = getPointById(stateProps.points, pointId);
                dispatch(changePosition(point.coord));
                dispatch(selectPoint(pointId));
                dispatchEvent(new Event('resize'));
            }
            if (isSmallScreen) {
                dispatch(changeListPaneVisible(!stateProps.listPaneShow));
            }
        }
    }
};

export default connect(mapStateToProps, mapToDispatch, mergeProps)(List)



