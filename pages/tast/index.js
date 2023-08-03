import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
const banner = '/image/New_Assets/aboutbanner2.jpg'
const about1 = '/image/New_Assets/About/AWTBrochure-01.png'
const about2 = '/image/New_Assets/About/AWTBrochure-02.png'
const about3 = '/image/New_Assets/About/AWTBrochure-03.png'
const about4 = '/image/New_Assets/About/AWTBrochure-04.png'
const about5 = '/image/New_Assets/About/AWTBrochure-05.png'
const about6 = '/image/New_Assets/About/AWTBrochure-06.png'
const about7 = '/image/New_Assets/About/AWTBrochure-07.png'
const about8 = '/image/New_Assets/About/AWTBrochure-08.png'
const about9 = '/image/New_Assets/About/AWTBrochure-09.png'
const about10 = '/image/New_Assets/About/AWTBrochure-10.png'
const about11 = '/image/New_Assets/About/AWTBrochure-11.png'
const about12 = '/image/New_Assets/About/AWTBrochure-12.png'
const about13 = '/image/New_Assets/About/AWTBrochure-13.png'
const about14 = '/image/New_Assets/About/AWTBrochure-14.png'
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

const images = [
  about1,
  about2,
  about3,
  about4,
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

