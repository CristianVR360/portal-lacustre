const { supabase } = require('../database/supabase');

const postUsers = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm since this is admin-created
      user_metadata: {
        name,
        role: role || 'ADMIN_ROLE'
      }
    });

    if (error) {
      console.error('Error creating user in Supabase Auth:', error);
      return res.status(400).json({ message: error.message });
    }

    res.status(201).json({
      id: data.user.id,
      email: data.user.email,
      name: data.user.user_metadata.name,
      role: data.user.user_metadata.role
    });
  } catch (err) {
    console.error('User creation error:', err);
    res.status(500).json({ message: 'Error creating user' });
  }
};

const putUsers = async (req, res) => {
  const { password, email } = req.body;

  try {
    // First find user by email
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();

    if (listError) {
      return res.status(500).json({ message: 'Error finding user' });
    }

    const existingUser = users.find(u => u.email === email);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Build update object
    const updateData = {};
    if (password) {
      updateData.password = password;
    }

    const { data, error } = await supabase.auth.admin.updateUserById(
      existingUser.id,
      updateData
    );

    if (error) {
      console.error('Error updating user:', error);
      return res.status(400).json({ message: error.message });
    }

    res.status(200).json({
      id: data.user.id,
      email: data.user.email
    });
  } catch (err) {
    console.error('User update error:', err);
    res.status(500).json({ message: 'Error updating user' });
  }
};

module.exports = {
  postUsers,
  putUsers,
};
