import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CONTAINER,
  PREVIEW,
  SETTING,
  MYFORM,
  BUTTON,
  ButtonCancel,
  Input,
} from './Setting.style';
import { updateSetting } from '../../actions';

// Schema for yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, '*Username must have at least 2 characters')
    .max(100, "*Username can't be longer than 100 characters")
    .required('*Username is required'),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string()
    .min(3, '*Password must be 3 characters at minimum')
    .required('*Password is required'),
  image: Yup.string()
    .url('*Must enter URL in http://www.example.com format')
    .required('*URL required'),
});

const SettingForm = () => {
  const user = useSelector((state: any) => state.user);
  const colors = useSelector((state: any) => state.colors);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCancelButton = () => {
    history.push('/');
  };

  return (
    <div>
      {user?.userInfo && (
        <Formik
          initialValues={{
            name: user?.userInfo?.username,
            email: user?.userInfo?.email,
            password: user?.userInfo?.password,
            image: user?.userInfo?.image,
            bio: user?.userInfo?.bio,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(updateSetting(values));
            history.push(`/profile/${user.userInfo.username}`);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <CONTAINER>
              <PREVIEW colors={colors}>
                <img src={values.image || user?.userInfo?.image} alt="avatar" />
                <h1>{values.name}</h1>
                <p>{values.email}</p>
                <p>{values.bio}</p>
              </PREVIEW>
              <SETTING colors={colors}>
                <h1>Setting</h1>
                <MYFORM onSubmit={handleSubmit} className="mx-auto">
                  <Form.Group controlId="formName">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Username ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.name && errors.name ? 'has-error' : undefined
                      }
                    />
                    {touched.name && errors.name ? (
                      <div className="error-message">{errors.name}</div>
                    ) : undefined}
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Input
                      type="text"
                      name="email"
                      placeholder="Email ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        touched.email && errors.email ? 'has-error' : undefined
                      }
                    />
                    {touched.email && errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password
                          ? 'has-error'
                          : undefined
                      }
                    />
                    {touched.password && errors.password && (
                      <div className="error-message">{errors.password}</div>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formImage">
                    <Input
                      type="text"
                      name="image"
                      placeholder="Image URL ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                      className={
                        touched.image && errors.image ? 'has-error' : undefined
                      }
                    />
                    {touched.image && errors.image ? (
                      <div className="error-message">{errors.image}</div>
                    ) : undefined}
                  </Form.Group>
                  <Form.Group controlId="formBio">
                    <Input
                      as="textarea"
                      name="bio"
                      rows={4}
                      placeholder="Bio ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bio}
                    />
                  </Form.Group>
                  <ButtonGroup>
                    <ButtonCancel
                      onClick={handleCancelButton}
                      variant="light"
                      type="reset"
                    >
                      Cancel
                    </ButtonCancel>
                    <BUTTON type="submit" disabled={isSubmitting}>
                      Submit
                    </BUTTON>
                  </ButtonGroup>
                </MYFORM>
              </SETTING>
            </CONTAINER>
          )}
        </Formik>
      )}
    </div>
  );
};

export default SettingForm;
