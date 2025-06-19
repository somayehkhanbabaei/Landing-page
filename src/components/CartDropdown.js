import React from 'react';

function CartDropdown({ userName, onSignIn, onSignUp, onLogout, basket, onRemove }) {
  return (
    <div className="cart-dropdown">
      {userName && basket && basket.length > 0 && (
        <div className="cart-basket-list">
          <div className="cart-basket-title">Basket</div>
          {basket.map(item => (
            <div key={item.id} className="cart-basket-item">
              <span>{item.name}</span>
              <button className="cart-basket-remove" onClick={() => onRemove(item.id)}>&times;</button>
            </div>
          ))}
          <hr style={{ margin: '8px 0' }} />
        </div>
      )}
      {!userName && (
        <>
          <button className="dropdown-item" onClick={onSignIn}>Sign In</button>
          <button className="dropdown-item" onClick={onSignUp}>Sign Up</button>
        </>
      )}
      {userName && (
        <button className="dropdown-item" onClick={onLogout}>Log Out</button>
      )}
    </div>
  );
}

export default CartDropdown;
