import Link from "next/link";
import { IAuthor } from '../../interfaces/IAuthor';
import { SocialMediaContainer } from "./styles";

type SocialMediaType = {
    author: IAuthor
}

const AuthorSocialMedias: React.FC <SocialMediaType> = ({ author }) => {
    return (
        <SocialMediaContainer className="social-medias">
            <Link target="_blanc" href={`https://web.facebook.com/${author.facebook}`} className="link"><button type="button" className="btn btn-social-icon-text btn-facebook"><i className="mdi mdi-facebook-box"></i>Facebook</button></Link>
            <Link target="_blanc"href={`https://www.instagram.com/${author.instagram}`} className="link"><button type="button" className="btn btn-social-icon-text btn-instagram"><i className="mdi mdi-instagram"></i>Instagram</button></Link>
            <Link target="_blanc" href={`https://www.github.com/${author.github}`} className="link"><button type="button" className="btn btn-social-icon-text btn-github"><i className="mdi mdi-github-circle"></i>GitHub</button></Link>
            <Link target="_blanc" href={`https://www.twitter.com/${author.twitter}`} className="link"><button type="button" className="btn btn-social-icon-text btn-twitter"><i className="mdi mdi-twitter"></i>Twitter</button></Link>
            <Link target="_blanc" href={`https://www.linkedin.com/in/${author.linkedin}`} className="link"><button type="button" className="btn btn-social-icon-text btn-linkedin"><i className="mdi mdi-linkedin-box"></i>Linkedin</button></Link>
            <Link target="_blanc" href={`https://api.whatsapp.com/send?phone=949224742&text=Deixe%20sua%20mensagem%20em%20caso%20de%20d%C3%BAdiva...`} className="link"><button type="button" className="btn btn-social-icon-text btn-whatsapp"><i className="mdi mdi-whatsapp"></i>WhatsApp</button></Link>
        </SocialMediaContainer>
    );
}

export default AuthorSocialMedias;
