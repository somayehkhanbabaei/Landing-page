import React from 'react';

function NavbarNotification({ notif }) {
  if (!notif) return null;
  return (
    <div className="navbar-notification">
      {notif}
    </div>
  );
}

export default NavbarNotification;
