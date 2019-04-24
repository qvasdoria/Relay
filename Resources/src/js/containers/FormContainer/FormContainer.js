import { connect }  from 'react-redux'
import { saveAddress, removePoints } from '../../store/actions'
import { getPoints } from '../../api'
import { Form } from '../../components'

const mapStateToProps = (state) => {
    const {
        address,
        configs: { formShow, provider }
    } = state;

    return  {
        address,
        formShow,
        provider
    }
};

const mergeProps = ({address, formShow, provider}, { dispatch }) => ({
    ...address,
    formShow,
    onSubmit (dataAddress) {
        dispatch(saveAddress(dataAddress));
        dispatch(removePoints());
        getPoints(dispatch, dataAddress, provider);
    }
});

export default connect(mapStateToProps, null, mergeProps)(Form)
