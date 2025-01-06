export default function Logo(props) {
    return (
        <>
         <img
        src={props.logo}
        alt="Logo"
        className={props.className}
      />
        </>
    );
}