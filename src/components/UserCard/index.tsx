import Image from "next/image";
import { IUser } from '../../interfaces/IUser';
import { IAuthor } from '../../interfaces/IAuthor';
import AuthorSocialMedias from "../AuthorSocialMedias";
import AuthorContacts from "../AuthorContacts";
import { UserCardContainer } from "./styles";

type CardType = {
    author: IAuthor;
    user: IUser;
}


const UserCard: React.FC <CardType> = ({ author, user }) => {
    return (
        <UserCardContainer className="card card-user">
              <div className="card-body">
                <p className="card-text">
                  </p><div className="author">
                    <div className="block block-one"></div>
                    <div className="block block-two"></div>
                    <div className="block block-three"></div>
                    <div className="block block-four"></div>
                      <Image className="avatar" src={user.avatar_url} width={160} height={160} alt="Gabriel Pereira" />
                      <h1 className="title">✨{ user.name}🚀</h1>
                    <h5 className="description">
                      @{author.github}
                    </h5>
                  </div>
                <p></p>
                <div className="card-description">
                  { user.bio }
                </div>
              </div>
              <div className="card-footer">
                <div className="button-container">
                    <AuthorContacts author={author} />
                    <AuthorSocialMedias author={author} />
                </div>
              </div>
        </UserCardContainer>
    )
}

export default UserCard;
