import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
    useGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  useGoatEvent = (e) => {
    const { useGoat, goat } = this.props;
    e.preventDefault();
    useGoat(goat.id);
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card w-25">
        <img src={goat.imgUrl} className="card-img-top" alt={goat.name} />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          {
            (goat.isBusy) ? (<div className="btn btn-danger" onClick={this.freeGoatEvent} >Free me</div>)
              : (<div className="btn btn-primary" onClick={this.useGoatEvent} >Use me</div>)
            }
        </div>
      </div>
    );
  }
}

export default Goat;
