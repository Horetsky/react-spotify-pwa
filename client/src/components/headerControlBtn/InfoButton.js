import { Link } from "react-router-dom";

const InfoButton = ({ url }) => {
    return (
        <Link to={url} target="_blank">

            <button className='play'>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0C4.92525 0 0 4.92525 0 11C0 17.0748 4.92525 22 11 22C17.0748 22 22 17.0748 22 11C22 4.92525 17.0748 0 11 0ZM9.625 9.625C9.625 9.26033 9.76987 8.91059 10.0277 8.65273C10.2856 8.39487 10.6353 8.25 11 8.25C11.3647 8.25 11.7144 8.39487 11.9723 8.65273C12.2301 8.91059 12.375 9.26033 12.375 9.625V16.5C12.375 16.8647 12.2301 17.2144 11.9723 17.4723C11.7144 17.7301 11.3647 17.875 11 17.875C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5V9.625ZM11 6.897C10.8194 6.89695 10.6406 6.86134 10.4737 6.79218C10.3069 6.72302 10.1553 6.62167 10.0276 6.49393C9.89991 6.36618 9.79864 6.21454 9.72956 6.04766C9.66048 5.88078 9.62496 5.70193 9.625 5.52131C9.62504 5.3407 9.66066 5.16186 9.72982 4.99502C9.79898 4.82817 9.90033 4.67658 10.0281 4.5489C10.1558 4.42122 10.3075 4.31995 10.4743 4.25087C10.6412 4.1818 10.8201 4.14627 11.0007 4.14631C11.3655 4.1464 11.7152 4.29139 11.9731 4.54938C12.231 4.80738 12.3758 5.15724 12.3757 5.522C12.3756 5.88676 12.2306 6.23655 11.9726 6.49441C11.7146 6.75228 11.3648 6.89709 11 6.897Z" fill="#FF4F72"/>
                </svg>
                <p>Детальніше</p>
            </button>

        </Link>
    );
};

export default InfoButton;