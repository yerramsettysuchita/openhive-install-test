function handleLogin(session) {
  if (session.expired) {
    window.location.href = '/login';
  }
  return true;
}

module.exports = { handleLogin };
