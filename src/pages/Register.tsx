import React, { useRef, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { auth } from '../firebase';

// TYPE

type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  // VALIDATION
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });

  // USEFORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  // ONSUBMIT
  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Container>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='regsiter-form bg-light shadow-lg mb-3 p-5 '>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label>Full Name</label>
              <input
                type='text'
                {...register('fullname')}
                className={`form-control ${
                  errors.fullname ? 'is-invalid' : ''
                }`}
              />
              <div className='inavlid-feedback'>{errors.fullname?.message}</div>
            </div>
            <div className='form-group'>
              <label>Username</label>
              <input
                type='text'
                {...register('username')}
                className={`form-control ${
                  errors.username ? 'is-invalid' : ''
                }`}
              />
              <div className='inavlid-feedback'>{errors.username?.message}</div>
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='text'
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className='inavlid-feedback'>{errors.email?.message}</div>
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                {...register('password')}
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
              />
              <div className='inavlid-feedback'>{errors.password?.message}</div>
            </div>
            <div className='form-group'>
              <label>Confirm Password</label>
              <input
                type='password'
                {...register('confirmPassword')}
                className={`form-control ${
                  errors.confirmPassword ? 'is-invalid' : ''
                }`}
              />
              <div className='inavlid-feedback'>
                {errors.confirmPassword?.message}
              </div>
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
