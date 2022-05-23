

function MainButton({text, callFunction}) {
    return(
        <button type="submit" className="btn btn-dark mb-3 col-4" onClick={callFunction}>{text}</button>
    );
}

export default MainButton