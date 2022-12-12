import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as yup from 'yup';
import {
  useLoginUserMutation,
  useRestorePasswordMutation,
} from '../../Redux/authUser/authUserApiSlice';
import { setCredentials, getCurrentUser } from '../../Redux/authUser/authUserSlice';
// import LoginTimer from 'components/LoginTimer';
import sprite from '../../Assets/images/sprite.svg';
import s from './LoginForm.module.scss';
import TextInput from '../../Components/common/TextInput/TextInput';
import Button from '../../Components/common/Button/Button';
// import { booksApi } from 'redux/books/booksApi';


const initialValues = {
  email: '',
  password: '',
};



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser] = useLoginUserMutation();
  const [restorePassword] = useRestorePasswordMutation();
  const email = useState('');
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[^ ]*$/, t('Incorrect email'))
      .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, t('Incorrect email'))
      .matches(/^[^-]\S*.@\S*.\.\S*[^-\s]$/, t('Incorrect email'))
      .min(10, t('validation.emailMin'))
      .max(63, t('validation.emailMax'))
      .required(t('Email is required')),
    password: yup
      .string()
      .required(t('Password is required'))
      .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, t('validation.incorrectPassword'))
      .matches(/^[^.-]\S*$/, t('validation.incorrectPassword'))
      .min(5, t('Password is required'))
      .max(30, t('Maximum 30 characters!')),
  });

  const handleSubmit = async ({ email, password }) => {
    alert('1')
    console.log("email", email)
    console.log("password", password)
    try {
      const userData = await loginUser({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData.data }));
      // dispatch({
      //   type: `${booksApi.reducerPath}/invalidateTags`,
      //   payload: ['Books'],
      // });
    } catch (error) {
      toast.error(error.data.message);
      dispatch(
        setCredentials({
          user: { email },
        })
      );
    }
  };

  // useEffect(() => {
  //   emailGoogle &&
  //     dispatch(
  //       setCredentials({
  //         user: { email: emailGoogle, token: accessToken },
  //       })
  //     );
  // }, [accessToken, dispatch, emailGoogle, loginUser, nameGoogle]);

  return (
    <div className='auth-layout'>
      <div className='form-layout tw-bg-gray-400 dark:tw-bg-zinc-800'>
        <div className='text'>
          <h4>Log in</h4>
          <p className='tw-text-gray-200'>to continue Indygo beta</p>
        </div>
        <div className='form-fields'>
          <div className='form-inner-wrapper'>
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={schema}
            >
              {() => (
                <Form className={s.form}>
                  <TextInput
                    name="email"
                    label={t('Email')}
                    htmlFor="email"
                    error="errEmail"
                    type="text"
                    placeholder="your@email.com"
                  />
                  <div className={s.relative}>
                    <TextInput
                      name="password"
                      label={('Password')}
                      htmlFor="password"
                      error="errPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="..."
                      maxLength={30}
                    />
                    <svg
                      className={s.icon}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <use
                        href={sprite + (showPassword ? '#icon-noeye' : '#icon-eye')}
                      />
                    </svg>
                  </div>

                  <button className={s.btn} type="submit">
                    {t('Log in')}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginForm;
