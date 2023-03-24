import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Col, Row, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import toastr from 'toastr';
import { fetchSignUpData } from '../../actions';
import * as Styles from './SignUp.style';

const SignUp = () => {
  const history = useHistory();
  const colors = useSelector((state: any) => state.colors);
  const token = useSelector((state: any) => state.signUp);
  const loginState = useSelector((state: any) => state.signUp);
  const dispatch = useDispatch();
  const logoDarkMode = 'https://i.ibb.co/hcPWhKm/Dark-logo.png';
  const logoLightMode = 'https://i.ibb.co/MCvtkrb/Light-logo.png';

  useEffect(() => {
    if (token?.userInfo?.token && loginState?.loginState) {
      toastr.success(`Welcome ${token?.userInfo?.username}!`);
      history.push('/');
    }
  }, [loginState.loginState]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      username: yup
        .string()
        .min(1, 'User name must not be empty')
        .max(100, 'User name is too long!')
        .required('User name is required.'),
      email: yup
        .string()
        .min(1, 'Email must not be empty')
        .max(100, 'Email is too long!')
        .required('Email is required.'),
      password: yup
        .string()
        .min(8, 'Password must have at least 8 characters')
        .max(100, 'Password is too long!')
        .required('Password is required.'),
    }),
    onSubmit: (values) => {
      dispatch(fetchSignUpData(values));
    },
  });

  useEffect(() => {
    if (Object.keys(values).length !== 0 && values.constructor !== Object) {
      dispatch(fetchSignUpData(values));
    }
  }, [values]);

  return (
    <Styles.ContainerAll colors={colors}>
      <Styles.SignUpContainer colors={colors}>
        <Styles.SignUpHeaderText colors={colors}>
          Sign Up
        </Styles.SignUpHeaderText>
        <Container fluid className="px-0">
          <Row>
            <Col className="px-5 d-flex align-items-center justify-content-center ">
              <img
                src={
                  colors.type === 'light-mode' ? logoLightMode : logoDarkMode
                }
                alt="Logo App"
                width="300"
                height="300"
              />
            </Col>
            <Col
              className={[
                'px-5',
                'border-left',
                colors.type === 'light-mode' ? 'border-dark' : 'border-light',
              ].join(' ')}
            >
              <Styles.FormSignUp colors={colors} onSubmit={handleSubmit}>
                <Styles.SignUpInputs
                  colors={colors}
                  type="text"
                  placeholder="Enter user name "
                  value={values.username}
                  id="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.username && errors.username ? (
                  <Styles.SmallText>{errors.username}</Styles.SmallText>
                ) : null}
                <Styles.SignUpInputs
                  colors={colors}
                  type="email"
                  placeholder="Enter email"
                  value={values.email}
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email ? (
                  <Styles.SmallText>{errors.email}</Styles.SmallText>
                ) : null}
                <Styles.SignUpInputs
                  colors={colors}
                  type="password"
                  placeholder="Enter password "
                  value={values.password}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password ? (
                  <Styles.SmallText>{errors.password}</Styles.SmallText>
                ) : null}
                <Styles.SignUpButton type="submit" colors={colors}>
                  Sign Up
                </Styles.SignUpButton>

                <Link to="/login">Already have an account? Click here.</Link>
              </Styles.FormSignUp>
            </Col>
          </Row>
        </Container>
      </Styles.SignUpContainer>
    </Styles.ContainerAll>
  );
};

export default SignUp;
