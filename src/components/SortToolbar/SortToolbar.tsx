import React from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { setDisplay, setSort } from '../../store/settings/SettingsSlice';
import GridLogo from '../../assets/images/grid.svg';
import ColumnLogo from '../../assets/images/column.svg';

const SortToolbar = () => {
    const { display } = useAppSelector(state => state.settings)
    const dispatch = useAppDispatch()
    return (
        <div className='sort'>
            <button className={display === 'grid' ? 'sort__btn sort__btn_active' : 'sort__btn'}
                onClick={() => dispatch(setDisplay('grid'))}
            >
                <img src={GridLogo} alt="icon-block"/>
            </button>
            <button className={display === 'column' ? 'sort__btn sort__btn_active' : 'sort__btn'}
                onClick={() => dispatch(setDisplay('column'))}
            >
                <img src={ColumnLogo} alt="icon-row"/>
            </button>
        </div>
    );
};

export default SortToolbar;