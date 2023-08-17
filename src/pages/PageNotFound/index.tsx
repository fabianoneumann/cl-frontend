import { PageNotFoundContainer, PageNotFoundImage } from "./styles";

import PageNotFoundGif from "../../assets/images/404.gif";

export function PageNotFound() {
    return (
        <PageNotFoundContainer>
            <PageNotFoundImage src={PageNotFoundGif} />
        </PageNotFoundContainer>
    );
}