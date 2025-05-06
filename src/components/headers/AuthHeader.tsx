import Logo from "../logo/Logo";
const AuthHeader = () => {
  return (
    <>
      <header className=" fixed  h-[50px] flex items-center justify-between">
        <Logo />
      </header>
    </>
  );
}
export default AuthHeader