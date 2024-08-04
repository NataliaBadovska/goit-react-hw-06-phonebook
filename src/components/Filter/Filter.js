import {useDispatch, useSelector } from 'react-redux'
import css from '../Phonebook/Phonebook.module.css';
import { nanoid } from 'nanoid';
import {filteringName} from 'components/redux/filtersSlice'

function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const filterInputId = nanoid();
    
    const onChangeFilterInput = (evt) => {
        const { value } = evt.currentTarget;
        dispatch(filteringName(value))
    }

     return (
            <>
                <label id={filterInputId} className={css.labelName}>Find contacts by name</label>
                <input type="text" name="filter" value={filter} id={filterInputId} className={css.inputForm} onChange={onChangeFilterInput} />
            </>
            
        )
}

export default Filter;