import 'react-app-polyfill/ie11';
import { Formik, Field, Form } from 'formik';
import {FC} from 'react';
import * as Yup from 'yup';
import { regexCardNumber, regexPhone, regexCardDate } from '../../helpers/regex';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../helpers/hooks';
import { clearCart } from '../../store/cart/cartSlice';


interface Values {
    firstName: string;
    email: string;
    address: string,
    phone: string,
    card: string,
    valid: ''
}
type OrderProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    isModal: boolean,
    setIsFinish: React.Dispatch<React.SetStateAction<boolean>>
}
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   address: Yup.string()
     .min(2, 'Too Short!')
     .required('Required'),
    phone:  Yup.string().matches(regexPhone, 'Phone number is not valid').required('Required'),
    card:  Yup.string().matches(regexCardNumber, 'Card number is not valid').required('Required'),
    valid: Yup.string().matches(regexCardDate, 'Card date is invalid').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
 });

const Order: FC<OrderProps> = ({setModal, setIsFinish}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    return (
        <div>
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                address: '',
                phone: '',
                card: '',
                valid: ''
            }}
            validationSchema={SignupSchema}
                onSubmit={values => {
                console.log(values);
                setIsFinish(true)
                setModal(false)
                localStorage.clear()
                dispatch(() => clearCart())
                setTimeout(() => {
                    navigate('/')
                    window.location.reload()
                }, 2000)
                
            }}
        >
        {({ errors, touched }) => (
            <Form className='form'>
                <div className="form__field">
                    <label htmlFor="firstName">Name</label>
                    <Field
                            name="firstName" 
                            placeholder="Name"
                            className="form__field"
                        />
                    {errors.firstName && touched.firstName ? (
                        <div className='form__error'>{errors.firstName}</div>
                    ) : null}

                </div>
            
                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="john@acme.com"
                        type="email"
                    />
                        {errors.email && touched.email ? (
                        <div className='form__error'>{errors.email}</div>
                    ) : null}
                </div>
            
                <div className="form__field">
                    <label htmlFor="phone">Phone</label>
                    <Field
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        type="string"
                    />
                    {errors.phone && touched.phone ? (
                        <div className='form__error'>{errors.phone}</div>
                    ) : null}
                </div>
                
                <div className="form__field">
                    <label htmlFor="address">Address</label>
                    <Field
                    id="address"
                    name="address"
                    placeholder="Address"
                    type="string"
                    />
                    {errors.address && touched.address ? (
                        <div className='form__error'>{errors.address}</div>
                    ) : null}
                </div>

                <div className="form__field">
                    <label htmlFor="email">Card number</label>
                    <Field
                    id="card"
                    name="card"
                    placeholder="Card number"
                    type="string"
                    />
                    {errors.card && touched.card ? (
                        <div className='form__error'>{errors.card}</div>
                    ) : null}
                </div>

                <div className="form__field">
                    <label htmlFor="valid">Valid thru</label>
                    <Field
                    id="valid"
                    name="valid"
                    placeholder='MM/YY'
                    type="string"
                    />
                    {errors.card && touched.card ? (
                        <div className='form__error'>{errors.valid}</div>
                    ) : null}
                </div>
            <button type="submit" className='form__submit'>Submit</button>
            </Form>)}
        </Formik>
        </div>
    );
};

export default Order;
