import styled from 'styled-components';

export const ContactsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

    button.btn {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .btn-google {
        background: #dc4a38;
        color: #ffffff;
    }
    .btn-google:hover,
    .btn-google:focus {
        background: #e47163;
        color: #ffffff;
        user-select: all;
        cursor: text;
        outline: none;
    }
    .btn-google.btn-social-icon-text {
        padding: 0 1.5rem 0 0;
        background: transparent;
    }
    .btn-google.btn-social-icon-text i {
        background: #dc4a38;
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 0.5rem;
    }

    .btn-outline-google {
        border: 1px solid #dc4a38;
        color: #dc4a38;
    }
    .btn-outline-google:hover {
        background: #dc4a38;
        color: #ffffff;
    }

    .btn-phone:hover,
    .btn-phone:focus {
        background: #e51e6b;
        color: #ffffff;
        cursor: text;
        outline: none;
        user-select: all;
    }
    .btn-phone.btn-social-icon-text {
        padding: 0 1.5rem 0 0;
        background: transparent;
    }
    .btn-phone.btn-social-icon-text i {
        background: #344675;
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 0.5rem;
    }

    .btn-phone {
        background: transparent;
        color: #ffffff;
    }

    @media only screen and (max-width: 499px) {
        flex-direction: column;

        button.btn {
            text-align: left;
        }

        button.btn:first-child {
            margin-bottom: 0.5rem;
        }
    }
`;
