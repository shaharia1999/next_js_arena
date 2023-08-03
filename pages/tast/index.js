import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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
import Modal from "react-modal";

export default function App() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src:about1 }, { src: about1 }, { src:about1 }]}
            />
        </>
    );
}
