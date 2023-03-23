import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { changeCategory } from '../../store/settings/SettingsSlice';

const CategorySelect = () => {
    const {category, activeCategory} = useAppSelector(state => state.settings)
    const dispatch = useAppDispatch();
    return (
        <select
            onChange={(e) => {
                console.log(e.target.value)
                dispatch(changeCategory(e.target.value))}
            }
            value={activeCategory}
        >   
            <option value="">none</option>
            {category.length ? (
                category.map((item, ind) => {
                    return <option value={item} key={ind}> {item}</option>
                })
            ) : ''}
            
        </select>
    );
};

export default CategorySelect;