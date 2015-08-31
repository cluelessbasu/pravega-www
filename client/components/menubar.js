import React from 'react';

class Menubar {
  render() {
    return (
      <div className="menubar">
        <MenubarLeft />
        <MenubarRight />
      </div>
    );
  }
}

class MenubarLeft {
  render() {
    return (
      <div className="menubar-left">
        <div>Airbus</div>
        <div>Pravega'16</div>
      </div>
    );
  }
}

class MenubarRight {
  render() {
    return (
      <div className="menubar-right">
        <div>Sponsor Us</div>
        <div>Schedule</div>
        <div>Hospitality</div>
        <div>News</div>
        <div>Contact</div>
        <div>Login</div>
      </div>
    );
  }
}

export default Menubar;
