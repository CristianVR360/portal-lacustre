const { supabase } = require('../database/supabase');

const isValidRole = async (role = '') => {
  const allowedRoles = ['ADMIN_ROLE', 'USER_ROLE'];
  if (!allowedRoles.includes(role)) {
    throw new Error(`Role ${role} is not registered in the system`);
  }
};

const isEmailDatabase = async (email = '') => {
  try {
    const { data: { users }, error } = await supabase.auth.admin.listUsers();

    if (error) {
      throw new Error(`Database validation error: ${error.message}`);
    }

    const exists = users.some(u => u.email === email);
    if (exists) {
      throw new Error(`Email: ${email} already exists`);
    }
  } catch (err) {
    if (err.message.includes('already exists')) throw err;
    throw new Error(`Validation error: ${err.message}`);
  }
};

module.exports = {
  isValidRole,
  isEmailDatabase,
};
