import React from 'react';
import { database } from '../firebase';

class ReadData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      degerler: []
    }
  }

  componentDidMount() {
    const degerlerArr = [];
    database.ref("barbaros").on('child_added', snap => {
      degerlerArr.push(snap.val())
    })

    this.setState({
      degerler: degerlerArr
    })
  }

  render() {
    return (
      <div>
        {this.state.degerler.map((deger) => {return (
          <div className="deger-div">
            <div>İsim: {deger.isim}</div> 
            <div>Şifre: {deger.şifre}</div>
          </div>
        )})}
      </div>
    );  
  }

}

export default ReadData;