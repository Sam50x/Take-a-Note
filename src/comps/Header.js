const Header = ({ handleAdd }) => {

    return (
        <header>
            <h2>Take<br />a<br />Note</h2>
            <button onClick={handleAdd}>+</button>
        </header>
    )
}


export default Header