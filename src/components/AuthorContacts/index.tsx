import Link from "next/link";
import { IAuthor } from '../../interfaces/IAuthor';
import { ContactsContainer } from "./styles";

type ContactsType = {
    author: IAuthor
}

const AuthorContacts: React.FC <ContactsType> = ({ author }) => {
    return (
        <ContactsContainer className="contacts">
            <button type="button" className="btn btn-social-icon-text btn-google"><i className="mdi mdi-email-outline"></i>{ author.email }</button>
            <button type="button" className="btn btn-social-icon-text btn-phone"><i className="mdi mdi-cellphone-android"></i>{ author.phone }</button>
        </ContactsContainer>
    );
}

export default AuthorContacts;
