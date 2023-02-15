import styled from 'styled-components';

export const UserCardContainer = styled.div`
    overflow: hidden;
    .title {
        font-size: var(--fs-1);
    }

    .description {
        font-size: var(--fs-2);
        font-weight: 300;
    }

    .card-description {
        font-size: var(--fs-3);
        line-height: 20px;
        text-align: center;
    }

    .image {
        height: 120px;
    }

    .author {
        text-align: center;
        text-transform: none;
        margin-top: 25px;
    }

    .author a + p.description {
        margin-top: -7px;
    }

    .author .block {
        position: absolute;
        height: 100px;
        width: 250px;
    }

    .author .block.block-one {
        background: rgba(225, 78, 202, 0.6);
        background: -webkit-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: -o-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: -moz-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
        -webkit-transform: rotate(150deg);
        -moz-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
        -o-transform: rotate(150deg);
        transform: rotate(150deg);
        margin-top: -90px;
        margin-left: -50px;
    }

    .author .block.block-two {
        background: rgba(225, 78, 202, 0.6);
        background: -webkit-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: -o-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: -moz-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
        -webkit-transform: rotate(30deg);
        -moz-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        -o-transform: rotate(30deg);
        transform: rotate(30deg);
        margin-top: -40px;
        margin-left: -100px;
    }

    .author .block.block-three {
        background: rgba(225, 78, 202, 0.6);
        background: -webkit-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: -o-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: -moz-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
        -webkit-transform: rotate(170deg);
        -moz-transform: rotate(170deg);
        -ms-transform: rotate(170deg);
        -o-transform: rotate(170deg);
        transform: rotate(170deg);
        margin-top: -70px;
        right: -45px;
    }

    .author .block.block-four {
        background: rgba(225, 78, 202, 0.6);
        background: -webkit-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: -o-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: -moz-linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        background: linear-gradient(
            to right,
            rgba(225, 78, 202, 0.6) 0%,
            rgba(225, 78, 202, 0) 100%
        );
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
        -webkit-transform: rotate(150deg);
        -moz-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
        -o-transform: rotate(150deg);
        transform: rotate(150deg);
        margin-top: -25px;
        right: -45px;
    }

    .avatar {
        width: 140px;
        height: 140px;
        border: 5px solid #2b3553;
        border-bottom-color: transparent;
        background-color: transparent;
        position: relative;
        border-radius: 100%;
    }

    .card-body {
        min-height: 240px;
    }

    hr {
        margin: 5px 15px;
    }

    .button-container {
        margin-bottom: 6px;
        text-align: center;
    }

    .card-description {
        margin-top: 30px;
    }

    i {
        font-size: var(--fs-2) !important;
    }
`;
