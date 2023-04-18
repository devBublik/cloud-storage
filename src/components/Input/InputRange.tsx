import React from 'react';
import { useDispatch } from 'react-redux';
import { max, min } from '../../helpers/const';
import { useAppSelector } from '../../helpers/hooks';
import { setPriceFilterEnd, setPriceFilterStart } from '../../store/settings/SettingsSlice';

const InputRange = () => {
    const {priceFilterStart, priceFilterEnd} = useAppSelector((state) => state.settings)
    const dispatch = useDispatch()

    return (
        <fieldset className="filter__field">
            <div className="filter__range-wrapper">
                <label className="filter__range-label">
                    <input
                        className='filter__range filter__range_from'
                        type='range'
                        onChange={(e) => dispatch(setPriceFilterStart(e.target.value))}
                        min={min}
                        max={max}
                        step={1}
                        value={priceFilterStart}
                    />
                    <input
                        className='filter__range filter__range_to'
                        type='range'
                        onChange={(e) => dispatch(setPriceFilterEnd(e.target.value))}
                        min={min}
                        max={max}
                        step={1}
                        value={priceFilterEnd}
                    />
                </label>
            </div>
            <div className="filter__flex">
                <p className="filter__range-text filter__range-text_min filter__price filter__price_min">{min} $</p>
                <p className="filter__range-text filter__range-text_current filter__price filter__price_current">{priceFilterStart} $ - {priceFilterEnd}$</p>
                <p className="filter__range-text filter__range-text_max filter__price filter__price_max">{max} $</p>
            </div>
        </fieldset>
       
    );
};

export default InputRange;