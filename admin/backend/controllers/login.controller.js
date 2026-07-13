const { supabase } = require('../database/supabase');

const getJWT = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error('Supabase Auth login error:', error.message);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Return Supabase's access token
    res.json({ token: data.session.access_token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Server error during login' });
  }
};

const verifyJwt = async (req, res) => {
  const { token } = req.body;
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(403).json({ isValidToken: false });
    }

    res.status(200).json({ isValidToken: true });
  } catch (error) {
    console.error('Invalid Token', error.message);
    res.status(403).json({ isValidToken: false });
  }
};

module.exports = { getJWT, verifyJwt };
