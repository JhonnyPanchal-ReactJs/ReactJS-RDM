import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as yup from 'yup';
import {
  URL_HOME_PAGE, API_URL
} from '../../Helpers/Paths'
import sprite from '../../Assets/images/sprite.svg';
import s from './LoginForm.module.scss';
import TextInput from '../../Components/common/TextInput/TextInput';
import { environment } from '../../environment.development';
import Api from '../../Helpers/ApiHandler';
import CODES from '../../Helpers/StatusCodes';
import { loginUser } from '../../Redux/Auth/Actions';



const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const API = useMemo(() => new Api(), []);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      setIsLoading(true);
      let reqBody = {
        email: email,
        password: password,
        app: environment.app,
        environment: environment.environment
      }

      let response = await API.post(API_URL.LOG_IN, {
        data: reqBody
      });
      if (response?.status === CODES.SUCCESS) {
        toast.success("Login Success")
        setTimeout(() => {
          dispatch(loginUser(response?.data));

          navigate(URL_HOME_PAGE)
        }, 1000);
        return;
      }
    } catch (error) {
      if (
        error?.response?.status === CODES.UNAUTHORIZED ||
        error?.response?.status === CODES.PRECONDITION_FAILED ||
        error.response?.status === CODES.BAD_REQUEST
      ) {
        toast.error("Wrong Credentials")
        setIsLoading(false);

      }
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
