import React, { Component } from 'react'
class AnaSayfa extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className="baslik">Selam!</h1>
                <style jsx>{`
                    .baslik {
                        color: #35ff96;
                    }
                `}</style>
            </div>
        )
    }
}
export default AnaSayfa;
