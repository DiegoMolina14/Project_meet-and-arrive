import WrapperHeder from "../components/molecules/WrapperHeder";
import WrapeerFoter from "../components/molecules/WrapperFoter";
import FormLoading from "../components/organism/FormLoading";
function LoadinPage() {
    return(
        <>
        <WrapperHeder/>
        <FormLoading/>
        <WrapeerFoter/>
        </>
    );
}
export default LoadinPage;