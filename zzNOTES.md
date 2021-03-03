ALTERNATIVE SOLUTIONS for 2 Components: InFrontOfYou & ButcherShop


class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, [
        'Sometimes, the solution is ',
        React.createElement('strong', {}, 'right in front of you.')
      ]),
    ]);
  }
}

class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className: 'butcher-shop' }, [
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {},
        BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product))
      )
    ]);
  }
}


