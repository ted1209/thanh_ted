import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Col, Row, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import toastr from 'toastr';
import { fetchSignInData } from '../../actions';
import * as Styles from './SignIn.style';

const SignIn = () => {
  const history = useHistory();
  const colors = useSelector((state: any) => state.colors);
  const loginState = useSelector((state: any) => state.signIn);
  const token = useSelector((state: any) => state.signIn);
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
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .min(1, 'Email must not be empty')
        .max(100, 'Email is too long!')
        .required('Email is required.'),
      password: yup
        .string()
        .min(1, 'Password must not be empty')
        .max(100, 'Password is too long!')
        .required('Password is required.'),
    }),
    onSubmit: (values) => {
      dispatch(fetchSignInData(values));
    },
  });

  return (
    <Styles.ContainerAll colors={colors}>
      <Styles.SignInContainer colors={colors}>
        <Styles.SignInHeaderText colors={colors}>
          Sign In
        </Styles.SignInHeaderText>
        <Container fluid className="mx-0">
          <Row>
            <Col
              className={[
                'px-5',
                'border-right',
                colors.type === 'light-mode' ? 'border-dark' : 'border-light',
              ].join(' ')}
            >
              <Styles.FormSignIn colors={colors} onSubmit={handleSubmit}>
                <Styles.SignInInputs
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
                <Styles.SignInInputs
                  colors={colors}
                  type="password"
                  placeholder="Enter password"
                  value={values.password}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password ? (
                  <Styles.SmallText>{errors.password}</Styles.SmallText>
                ) : null}
                <Styles.SignInButton type="submit" colors={colors}>
                  Sign In
                </Styles.SignInButton>

                <Link to="/register">Create new account?</Link>
              </Styles.FormSignIn>
            </Col>
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
          </Row>
        </Container>
      </Styles.SignInContainer>
    </Styles.ContainerAll>
  );
};

export default SignIn;
