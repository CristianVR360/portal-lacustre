const { supabase } = require('../database/supabase');

const createLead = async (req, res) => {
  const { name, email, phone, message, origin } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Name, email, and phone are required' });
  }

  try {
    const { data: lead, error } = await supabase
      .from('leads')
      .insert([{ name, email, phone, message, origin: origin || 'form', status: 'new' }])
      .select()
      .single();

    if (error) {
      console.error('Error creating lead in Supabase:', error);
      return res.status(500).json({ message: 'Error saving lead', error: error.message });
    }

    res.status(201).json({ message: 'Lead saved successfully', lead });
  } catch (error) {
    console.error('Lead Controller Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getLeads = async (req, res) => {
  try {
    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching leads from Supabase:', error);
      return res.status(500).json({ message: 'Error retrieving leads', error: error.message });
    }

    res.status(200).json({ leads });
  } catch (error) {
    console.error('Lead Controller Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateLeadStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  try {
    const { data: lead, error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', id)
      .select()
      .maybeSingle();

    if (error) {
      console.error('Error updating lead status in Supabase:', error);
      return res.status(500).json({ message: 'Error updating lead', error: error.message });
    }

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.status(200).json({ message: 'Lead updated successfully', lead });
  } catch (error) {
    console.error('Lead Controller Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteLead = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id)
      .select()
      .maybeSingle();

    if (error) {
      console.error('Error deleting lead from Supabase:', error);
      return res.status(500).json({ message: 'Error deleting lead', error: error.message });
    }

    res.status(200).json({ message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Lead Controller Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLeadStatus,
  deleteLead
};
