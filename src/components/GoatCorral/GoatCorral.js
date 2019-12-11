import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';

import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    butts: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
  }

  render() {
    const myGoats = this.props.butts;
    const { freeGoat } = this.props;

    const goatCards = myGoats.map((goat) => (<Goat key={goat.id} goat={goat} freeGoat={freeGoat} />));

    return (
      <div className='container'>
        <div className="goatCorral row">
          {goatCards}
        </div>
      </div>
    );
  }
}

export default GoatCorral;
