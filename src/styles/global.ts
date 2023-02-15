import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {

        /**
        * color
        */
        --primary: ${props => props.theme.colors.primary};
        --accent: ${props => props.theme.colors.accent};

        --background_primary: ${props => props.theme.colors.background_primary};
        --background_secondary: ${props =>
            props.theme.colors.background_secondary};

        --action_primary: ${props => props.theme.colors.action_primary};
        --action_secondary: ${props => props.theme.colors.action_secondary};
        --action_tertiary: ${props => props.theme.colors.action_tertiary};

        --foreground_primary: ${props => props.theme.colors.foreground_primary};


        --white: hsl(0, 0%, 100%);

        /**
        * typography
        */

        --fs-base: 0.85rem;
        --fs-1: 1.875rem;
        --fs-2: 1.5rem;
        --fs-3: 1.25rem;
        --fs-4: 0.875rem;
        --fs-5: 0.75rem;

        /**
        * spacing
        */

        --py: 5rem;

    }

    html,
    body {
        font-size: var(--fs-base); /* base font-size (0.85rem = 13.6px) */
        line-height: 1.8;
        width: 100%;
        height: 100%;
        color: var(--foreground_primary);
        background: var(--background_primary);
    }

    *, *::before, *::after {
        margin:  0;
        padding: 0;
        box-sizing: border-box !important;
        font-family: 'Roboto', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',  'Oxygen',
        'Ubuntu', 'Cantarell',' Fira Sans',' Droid Sans', Helvetica Neue, sans-serif;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    li { list-style: none; }

    a, span { display: inline-block; }

    button {
        cursor: pointer;
    }

    /**
 * scrollbar style
 */

    ::-webkit-scrollbar, ::-moz-scrollbar, ::-o-scrollbar { width: 10px; }


    ::-webkit-scrollbar-thumb,
    ::-moz-scrollbar-thumb,
    ::-o-scrollbar-thumb {
        background: var(--primary);
        border-radius: 20px;
    }

    .home {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.card {
    background: var(--background_secondary);
    width: 100%;
    max-width: 40rem;
}

`;
