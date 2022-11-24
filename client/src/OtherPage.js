import { Link } from "react-router-dom";

const OtherPage = () => {
    return (
        <div>
            La otra pagina :D
            <br/>
            <br/>
            <Link to="/">Go back to home screen</Link>
        </div>
    );
};
export default OtherPage;