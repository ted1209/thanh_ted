import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import {
  Button,
  Modal,
  InputGroup,
  FormControl,
  Carousel,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import TagsInput from './TagsInput';
import styles from './CreateArticleModal.module.css';
import { postArticleAsync } from '../../actions';
import { ShowImage } from '../../pages/Home/Home.style';
import ImagePopover from './ImagesPopover';

function CreateArticleModal({ colors, showModal, setShowModal }: any) {
  const [tags, setTags] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const imageRef = useRef<any>(null);
  const dispatch = useDispatch();
  const handleClose = () => setShowModal(!showModal);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      body: '',
      tags,
    },
    validationSchema: yup.object().shape({
      title: yup
        .string()
        .min(1, 'Title must not be empty')
        .max(50, 'Title is too long!')
        .required('Title is required.'),
      description: yup
        .string()
        .min(1, 'Description must not be empty')
        .max(100, 'Description is too long!')
        .required('Description is required.'),
      body: yup
        .string()
        .min(1, 'Body must not be empty')
        .required('Body is required.'),
    }),
    onSubmit: (values) => {
      const newBody = images.reduce(
        // eslint-disable-next-line no-return-assign
        (result: string, image: any) => (result += `/iMAge/${image}`),
        values.body
      );
      dispatch(postArticleAsync({ ...values, body: newBody }));
      values.title = '';
      values.description = '';
      values.body = '';
      setTags([]);
      setImages([]);
      handleClose();
    },
  });

  const addTags = (e: any) => {
    if (e.target.value !== '') {
      setTags([...tags, e.target.value]);
      setFieldValue('tags', [...tags, e.target.value]);
      e.target.value = '';
    }
  };

  const deleteTags = (i: any) => {
    setTags([...tags.filter((_: any, index: number) => index !== i)]);
    setFieldValue('tags', [
      ...tags.filter((_: any, index: number) => index !== i),
    ]);
  };

  const handleKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 13) {
      e.preventDefault();
    }
  };

  const handleAddImage = (e: any) => {
    if (e.key === 'Enter') {
      imageRef.current.value && setImages([...images, imageRef.current.value]);
      imageRef.current.value = '';
    }
  };

  const handleDeleteImage = (index: any) => {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  };

  const handleChooseAnImage = (image: string) => {
    setImages([...images, image]);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="createArticleModal"
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header
          className={styles.ModalHeader}
          style={{ backgroundColor: `${colors.background}` }}
        >
          <Modal.Title className={styles.ModalTitle}>
            <h1>Create Article</h1>
          </Modal.Title>
          <Button className={styles.CloseButton} onClick={handleClose}>
            <i className="fas fa-times fa-lg" />
          </Button>
        </Modal.Header>
        <form
          className={styles.ModalForm}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
        >
          <Modal.Body
            style={{ backgroundColor: `${colors.background}`, padding: '12px' }}
          >
            <InputGroup className="mb-3 d-flex flex-column">
              <FormControl
                className={styles.ModalInput}
                placeholder="Title"
                aria-label="Title"
                id="title"
                name="title"
                aria-describedby="basic-addon1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
              />
              {touched.title && errors.title ? (
                <small className={styles.ErrorText}>{errors.title}</small>
              ) : null}
            </InputGroup>
            <InputGroup className="mb-3 d-flex flex-column">
              <FormControl
                className={styles.ModalInput}
                placeholder="Description"
                aria-label="Description"
                id="description"
                name="description"
                aria-describedby="basic-addon1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
              />
              {touched.description && errors.description ? (
                <small className={styles.ErrorText}>{errors.description}</small>
              ) : null}
            </InputGroup>
            <InputGroup className="mb-3 d-flex flex-column">
              <FormControl
                className={styles.ModalInput}
                as="textarea"
                rows={5}
                placeholder="Body"
                aria-label="Body"
                id="body"
                name="body"
                aria-describedby="basic-addon1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.body}
              />
              {touched.body && errors.body ? (
                <small className={styles.ErrorText}>{errors.body}</small>
              ) : null}
            </InputGroup>
            <InputGroup className="mb-3 d-flex flex-column">
              <TagsInput
                tags={tags}
                addTags={addTags}
                deleteTags={deleteTags}
              />
            </InputGroup>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <input
                className={styles.ImagesInput}
                placeholder="Press Enter to add image..."
                ref={imageRef}
                onKeyUp={handleAddImage}
              />
              <div className={styles.ImagesPopover}>
                <ImagePopover handleChooseAnImage={handleChooseAnImage} />
              </div>
            </div>
            {images.length !== 0 && (
              <Carousel
                interval={5000}
                defaultActiveIndex={0}
                controls={false}
                // activeIndex={images.length - 1}
              >
                {images.map((image: any, index: any) => (
                  <Carousel.Item key={index}>
                    <ShowImage image={image} style={{ height: '500px' }}>
                      <i
                        className="fas fa-times fa-2x fa-fw"
                        style={{
                          position: 'absolute',
                          right: 0,
                          margin: '20px',
                          color: colors.background,
                          cursor: 'pointer',
                        }}
                        onClick={() => handleDeleteImage(index)}
                      />
                    </ShowImage>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Modal.Body>
          <Modal.Footer
            style={{ backgroundColor: `${colors.background}` }}
            className="d-block"
          >
            <Button className={styles.CreateButton} type="submit">
              Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default CreateArticleModal;
