const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const grannies = React.createElement('p', {}, "Two grannies having the time of their life!");
const passengers = React.createElement('p', {}, "Passengers:");
const agnes = React.createElement('li', {}, "Agnes");
const muriel = React.createElement('li', {}, "Muriel");

const list = React.createElement('ul',{}, [agnes, muriel]);

const OlderCoaster = React.createClass({
  render(){
    return React.createElement('div', {className: "oldercoaster"}, [grannies, passengers, list])
  }
})

class InFrontOfYou extends React.Component {
  render(){
    const pOne = React.createElement('p', {}, "You shouldn't look too far.")
    const strong = React.createElement('strong', {}, "right in front of you.")
    const pTwo = React.createElement('p', {}, ["Sometimes, the solution is ", strong])
    return React.createElement('div', {}, [pOne, pTwo]);
  }
}

class ButcherShop extends React.Component {
  render(){
    const paragraph = React.createElement('p', {}, "Hello! We have the following products for sale today:");
    const list = React.createElement('ul', {}, BUTCHER_PRODUCTS.map(meat => 
      React.createElement('li', {}, meat)));
    return React.createElement('div', {className: 'butcher-shop'}, [paragraph, list])
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
