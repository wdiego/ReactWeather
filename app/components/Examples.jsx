var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Uberaba'>Uberaba/MG, Brasil</Link>
        </li>
        <li>
          <Link to='/?location=Brasilia'>Brasilia/DF, Brasil</Link>
        </li>
      </ol>
    </div>
    )
};

module.exports = Examples;