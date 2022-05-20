import Background from '../Assets/Wedding_Party'

function Banner({username}) {
    var styleBanner = {
        objectFit: 'cover',
        height: "400px"
    }

    var styleText = {
        position: 'absolute',

    }

    return(
        <div className='w-100'>
            <img src={Background} className="w-100" alt="..." style={styleBanner}/>
        </div>
    )
}

export default Banner