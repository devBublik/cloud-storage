import {FC, useState} from 'react';
import arrow from '../../assets/images/arrow.svg';


type ToggleFilterProps = {
    title: string,
    // isVisible: boolean,
    children: JSX.Element;
}

const ToggleFilter: FC<ToggleFilterProps> = ({title, children}) => {
    let [isVisible, setIsVisible] = useState(false);
    return (
        <div className='toggle'>
            <div
                className="toggle__arrow"
                onClick={() => {
                    setIsVisible(isVisible=!isVisible)
                }}
            >
                <img src={arrow} alt="icon-arrow" className={isVisible ? '' : 'toggle__icon toggle__icon_down'}/>
                <span className='toggle__title'> {title}</span>
            </div>
            {isVisible ? (
                <div className="toggle__children">
                    {children}
                </div>
            ) : ''}
            
        </div>
    );
};

export default ToggleFilter;