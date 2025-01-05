export default function Logo(props) {
    return (
        <>
         <img
        src={props.whiteLogo}
        alt="Logo"
        className={props.className}
      />
        </>
    );
}