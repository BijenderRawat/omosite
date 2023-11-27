import AuthenticationForm from "./AuthenticationForm";

const Authentication = (props) => {
  return (
    <>
      <AuthenticationForm onHideAuthentication={props.onHideAuthentication} />;
    </>
  );
};

export default Authentication;
