import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { switchTheme } from '../store/actions/themeAction';

interface Props {
  theme: string;
}

class Navbar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { theme } = this.props;

    const navItems = [
      { link: '/apps/dev-to', text: 'DevTo' },
      { link: '/apps/github', text: 'GitHub' },
      { link: '/apps/usa', text: 'USA' }
    ];

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link href={'/'}>
            <a className="navbar-brand">HIEU</a>
          </Link>
          <ul className="navbar-nav mr-auto">
            {navItems.map((item, index: number) => {
              const { link, text } = item;
              return (
                <li key={`nav-item-${index}`} className="nav-item">
                  <Link href={link}>
                    <a className="nav-link">{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme
});

const mapDispatchToProps = {
  switchTheme: switchTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
