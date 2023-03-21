import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { setBrandFilter } from '../../store/settings/SettingsSlice';


const Select = () => {
    const {brands} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()
    console.log(brands)
    return (
        <select
            name="brand"
            onChange={e => {
                dispatch(setBrandFilter(e.target.value))
            }}
        >
            {brands.length ? (
                brands.map((brand, ind) => {
                    return <option key={ind}
                                value={brand}
                            >
                                {brand}
                            </option>
                })
            ) : ''}
        </select>
    );
};

export default Select;