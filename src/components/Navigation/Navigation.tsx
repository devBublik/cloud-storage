import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { categoryRequest } from '../../store/settings/SettingsSlice';


const Navigation = () => {
    const { category, activeCategory } = useAppSelector(state => state.settings)
    const dispatch = useAppDispatch()
    const [isVisible, setIsVisible] = useState(false);
    // const categoryIn = category[activeCategory] 
    useEffect(() => {
            dispatch(categoryRequest())
    }, [])
    console.log(category, activeCategory)
    const firstCategories = category.slice(0,5)
    return (
       <nav className='navigation'>
            <div className="container">
                <ul className='navigation__list'>
                    {!isVisible ? (
                        firstCategories.map((item, ind) => {
                        return (
                            <li key={ind} className="navigation__item">
                                {/* <button
                                    className={activeCategory === ind ? 'navigation__btn active' : 'navigation__btn'}
                                    onClick = {() => {
                                        // dispatch(resetBrandFilter());
                                        dispatch(changeCategory({activeIndex: ind}))
                                    }}
                                > 
                                    {(toSetFirstLetter(item))} 
                                </button> */}
                            </li>
                        )
                        
                        })) : (
                            category.map((item, ind) => {
                                return (
                                    <li key={ind} className="navigation__item">
                                        {/* <button
                                            className={activeCategory === ind ? 'navigation__btn active' : 'navigation__btn'}
                                            onClick = {() => {
                                                // dispatch(resetBrandFilter());
                                                dispatch(changeCategory({activeIndex: ind}))
                                            }}
                                        > 
                                            {(toSetFirstLetter(item))} 
                                        </button> */}
                                    </li>
                                )
                            }
                        ))}
                    
                    <button
                        className="navigation__btn"
                        onClick={() => setIsVisible(true)}
                    > {isVisible ? '' : 'Show all'}</button>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

