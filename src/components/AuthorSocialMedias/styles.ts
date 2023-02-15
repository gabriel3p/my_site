import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
    border-top: 1px solid var(--action_tertiary);
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;

    button.btn {
        text-align: left;
        font-size: var(--fs-3);
        width: 100%;
        position: relative;
        transition: 0.5s;
    }

    button.btn::before {
        content: '';
        position: absolute;
        top: -0.2rem;
        left: -0.2rem;
        height: 0;
        width: 0;
        border-top: 3px solid var(--foreground_primary);
        border-left: 3px solid var(--foreground_primary);
        transition: 0.5s ease-in-out;
        opacity: 0;
        z-index: 1;
    }

    button.btn::after {
        content: '';
        position: absolute;
        bottom: -0.2rem;
        right: -0.2rem;
        width: 0;
        height: 0;
        border-bottom: 3px solid var(--foreground_primary);
        border-right: 3px solid var(--foreground_primary);
        z-index: 1;
        opacity: 0;
        transition: 0.5s ease-in-out;
    }

    button.btn:hover::before {
        width: 101%;
        height: 101%;
        border-top: 3px solid var(--foreground_primary);
        border-left: 3px solid var(--foreground_primary);
        opacity: 1;
    }

    button.btn:hover::after {
        width: 101%;
        height: 101%;
        border-bottom: 3px solid var(--foreground_primary);
        border-right: 3px solid var(--foreground_primary);
        opacity: 1;
    }

    .btn-twitter {
        background: #2caae1;
        color: #ffffff;
    }
    .btn-twitter:hover,
    .btn-twitter:focus {
        background: #1b8dbf;
        color: #ffffff;
    }
    .btn-twitter.btn-social-icon-text {
        padding: 0 1.5rem 0 0;
        background: #59bce7;
    }
    .btn-twitter.btn-social-icon-text i {
        background: #2caae1;
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 1.5rem;
    }

    .btn-outline-twitter {
        border: 1px solid #2caae1;
        color: #2caae1;
    }
    .btn-outline-twitter:hover {
        background: #2caae1;
        color: #ffffff;
    }

    .btn-facebook {
        background: #3b579d;
        color: #ffffff;
    }
    .btn-facebook:hover,
    .btn-facebook:focus {
        background: #2d4278;
        color: #ffffff;
    }
    .btn-facebook.btn-social-icon-text {
        padding: 0 1.5rem 0 0;
        background: #4e6ebd;
    }
    .btn-facebook.btn-social-icon-text i {
        background: #3b579d;
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 1.5rem;
    }

    .btn-outline-facebook {
        border: 1px solid #3b579d;
        color: #3b579d;
    }
    .btn-outline-facebook:hover {
        background: #3b579d;
        color: #ffffff;
    }

    .btn-linkedin {
        background: #0177b5;
        color: #ffffff;
    }
    .btn-linkedin:hover,
    .btn-linkedin:focus {
        background: #015682;
        color: #ffffff;
    }
    .btn-linkedin.btn-social-icon-text {
        padding: 0 1.5rem 0 0;
        background: #0198e8;
    }
    .btn-linkedin.btn-social-icon-text i {
        background: #0177b5;
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 1.5rem;
    }

    .btn-outline-linkedin {
        border: 1px solid #0177b5;
        color: #0177b5;
    }
    .btn-outline-linkedin:hover {
        background: #0177b5;
        color: #ffffff;
    }

    .btn-github {
        background: #333333;
        color: #ffffff;
    }
    .btn-github:hover,
    .btn-github:focus {
        background: #1a1a1a;
        color: #ffffff;
    }
    .btn-github.btn-social-icon-text {
        padding: 0 1.5rem 0 0;
        background: #4d4d4d;
    }
    .btn-github.btn-social-icon-text i {
        background: #333333;
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 1.5rem;
    }

    .btn-outline-github {
        border: 1px solid #333333;
        color: #333333;
    }
    .btn-outline-github:hover {
        background: #333333;
        color: #ffffff;
    }

    .btn-instagram {
        background: #fd5d93;
        color: #ffffff;
    }
    .btn-instagram:hover,
    .btn-instagram:focus {
        background: #e51e6b;
        color: #ffffff;
    }
    .btn-instagram.btn-social-icon-text {
        padding: 0 1.5rem 0 0;
        background: #ef7aa7;
    }
    .btn-instagram.btn-social-icon-text i {
        background: #ea4c89;
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 1.5rem;
    }

    .btn-outline-instagram {
        border: 1px solid #ea4c89;
        color: #ea4c89;
    }
    .btn-outline-instagram:hover {
        background: #ea4c89;
        color: #ffffff;
    }

    .btn-whatsapp {
        background: #2dce89;
        color: #ffffff;
    }
    .btn-whatsapp:hover,
    .btn-whatsapp:focus {
        background: #2dce89;
        color: #ffffff;
    }
    .btn-whatsapp.btn-social-icon-text {
        padding: 0 1.5rem 0 0;
        background: #30dfb0;
    }
    .btn-whatsapp.btn-social-icon-text i {
        background: #2dce89;
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 1.5rem;
    }

    .btn-outline-whatsapp {
        border: 1px solid #30dfb0;
        color: #30dfb0;
    }
    .btn-outline-whatsapp:hover {
        background: #ea4c89;
        color: #ffffff;
    }

    @media only screen and (max-width: 380px) {
        grid-template-columns: 1fr;
    }
`;
