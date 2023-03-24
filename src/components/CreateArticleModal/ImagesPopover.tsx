import React, { useEffect, useRef, useState } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as Styles from './ImagePopover.style';

interface IImagesPopoverProps {
  handleChooseAnImage: (image: string) => void;
}

const ImagesPopover: React.FunctionComponent<IImagesPopoverProps> = ({
  handleChooseAnImage,
}) => {
  const colors = useSelector((props: any) => props.colors);
  const [images, setImages] = useState<any>([]);
  const [target, setTarget] = useState(null);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const searchRef = useRef<any>(null);
  const imagesRef = useRef<any>(null);
  const ref = useRef<any>(null);
  let cancelToken: any;

  useEffect(() => {
    axios({
      method: 'get',
      url:
        'https://api.unsplash.com/collections/317099/photos?page=1&per_page=30&order_by=latest',
      headers: {
        Authorization:
          'Client-ID 454087647775b190c574339cb2994716b17ef2f83ad11838d0ef0dac2d102e66',
      },
    }).then((data) => setImages(data.data));
  }, []);

  const handleSearchImages = async () => {
    if (searchRef.current.value !== '') {
      setPage(1);
      window.scrollTo(0, imagesRef.current.offsetTop);
      if (typeof cancelToken !== typeof undefined) {
        cancelToken.cancel('Operation canceled due to new request.');
      }
      cancelToken = axios.CancelToken.source();
      const data = await axios({
        method: 'get',
        url: `https://api.unsplash.com/search/photos?query=${searchRef.current.value}&per_page=30&page=1`,
        cancelToken: cancelToken.token,
        headers: {
          Authorization:
            'Client-ID 454087647775b190c574339cb2994716b17ef2f83ad11838d0ef0dac2d102e66',
        },
      });
      setImages(data.data.results);
    }
  };

  const handleClick = (e: any) => {
    setShow(!show);
    setTarget(e.target);
  };

  const handleMoreImages = () => {
    axios({
      method: 'get',
      url:
        searchRef.current.value === ''
          ? `https://api.unsplash.com/collections/317099/photos?page=${
              page + 1
            }&per_page=30&order_by=latest`
          : `https://api.unsplash.com/search/photos?query=${
              searchRef.current.value
            }&per_page=30&page=${page + 1}`,
      headers: {
        Authorization:
          'Client-ID 454087647775b190c574339cb2994716b17ef2f83ad11838d0ef0dac2d102e66',
      },
    }).then((data) =>
      searchRef.current.value === ''
        ? setImages([...images, ...data.data])
        : setImages([...images, ...data.data.results])
    );
    setPage(page + 1);
  };

  return (
    <div ref={ref}>
      <Overlay
        show={show}
        target={target}
        placement="right-end"
        container={ref.current}
        containerPadding={10}
        rootClose
      >
        <Popover id="popover-basic">
          <Popover.Title
            style={{
              color: colors.fontColor,
              width: '400px',
              height: '770px',
              background: colors.cardColor,
            }}
          >
            <Styles.Title>Images from Unsplash</Styles.Title>
            <div>
              <Styles.Input
                type="text"
                placeholder="Search ..."
                ref={searchRef}
                onChange={handleSearchImages}
              />
            </div>
            <div>
              <Styles.ImagesContainer ref={imagesRef}>
                {images.map((image: any, index: any) => (
                  <Styles.Image
                    image={image.urls.small}
                    key={index}
                    onClick={() => handleChooseAnImage(image.urls.regular)}
                  />
                ))}
              </Styles.ImagesContainer>
            </div>
            <Styles.MoreImages
              style={{ color: colors.fontcolor }}
              onClick={handleMoreImages}
            >
              more images...
            </Styles.MoreImages>
          </Popover.Title>
        </Popover>
      </Overlay>
      <i
        className="fas fa-images fa-lg fa-fw"
        style={{ cursor: 'pointer' }}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImagesPopover;
