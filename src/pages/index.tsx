import { GetServerSideProps } from 'next';
import Head from 'next/head'


import UserCard from '../components/UserCard';
import { IHomePage } from '../interfaces/IHomePage';
import { UserService } from '../services/UserService';

const Home: React.FC <IHomePage> = ({ author, user }) => {

  return (
    <section>
        <Head>
            <title>gabriel3p</title>
        </Head>

        <article className="home">
            <UserCard author={author} user={user} />
        </article>

    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const response = await UserService.getUser();

    return {
        props: {
            author: {
                github: process.env.GITHUB_USERNAME,
                facebook: process.env.FACEBOOK_USERNAME,
                instagram: process.env.INSTAGRAM_USERNAME,
                twitter: process.env.TWITTER_USERNAME,
                linkedin: process.env.LINKEDIN_USERNAME,
                whatsapp: process.env.WHATSAPP_NUMBER,
                email: process.env.AUTHOR_EMAIL,
                phone: process.env.AUTHOR_PHONE
            },
            user: response.data,
        }
    }
}

export default Home;
