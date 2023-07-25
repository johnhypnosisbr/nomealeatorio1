import './App.css';

function ComponenteHeader() {

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "10px",
        }}>
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
}

export { ComponenteHeader };