import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { categoryRequest, changeCategory } from '../../store/categories/CategoriesSlice';

const CategorySelect = () => {
    const {category, activeCategory} = useAppSelector(state => state.category)
    const dispatch = useAppDispatch();
    useEffect(() => {
            dispatch(categoryRequest())
    }, [])
    return (
        <select
            onChange={(e) => {
                dispatch(changeCategory(e.target.value))}
            }
            value={category[activeCategory]}
        >
            {category.length ? (
                category.map((item, ind) => {
                    return <option value={item} key={ind}> {item}</option>
                })
            ) : ''}
            
        </select>
    );
};

export default CategorySelect;