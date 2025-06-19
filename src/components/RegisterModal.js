import React from 'react';

function RegisterModal({
  show, onClose,
  regName, setRegName,
  regEmail, setRegEmail,
  regPassword, setRegPassword,
  regPassword2, setRegPassword2,
  regErrors, onSubmit
}) {
  if (!show) return null;
  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={e => e.stopPropagation()}>
        <button className="login-modal-close" onClick={onClose}>&times;</button>
        <h3>Sign Up</h3>
        <form onSubmit={onSubmit} className="login-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={regName}
              onChange={e => setRegName(e.target.value)}
              autoFocus
            />
            {regErrors.name && <span className="form-error">{regErrors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={regEmail}
              onChange={e => setRegEmail(e.target.value)}
            />
            {regErrors.email && <span className="form-error">{regErrors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={regPassword}
              onChange={e => setRegPassword(e.target.value)}
            />
            {regErrors.password && <span className="form-error">{regErrors.password}</span>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={regPassword2}
              onChange={e => setRegPassword2(e.target.value)}
            />
            {regErrors.password2 && <span className="form-error">{regErrors.password2}</span>}
          </div>
          <button type="submit" className="login-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
