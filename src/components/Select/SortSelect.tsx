import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { setSort } from '../../store/settings/SettingsSlice';

const SortSelect = () => {
    const { sort } = useAppSelector(state => state.settings)
    const dispatch = useAppDispatch()
    return (
        <select
            onChange={(e) => {
                dispatch(setSort(e.target.value))
                }
            }
            value={sort}
        >
            <option value=''> Sort: none</option>
            <option value='priceLowToHigh'>Price: Low to High</option>
            <option value='priceHighToLow'>Price: High to Low</option>
            <option value='rating'>Rating</option>
        </select>
    );
};

export default SortSelect;