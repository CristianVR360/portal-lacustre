const express = require('express');
const cors = require('cors');
const path = require('path');

// Rutas base del proyecto (relativas a este archivo en admin/backend/models/)
const PROJECT_ROOT = path.join(__dirname, '..', '..', '..');
const ADMIN_PUBLIC = path.join(__dirname, '..', '..', 'public');
const MASTERPLAN_DIR = path.join(PROJECT_ROOT, 'masterplan');
const SITE_DIR = path.join(PROJECT_ROOT, 'site');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.usersPath = '/api/users';
    this.loginPath = '/api/login';
    this.adminPath = '/api/admin';
    this.aiPath = '/api/ai';
    this.leadsPath = '/api/leads';

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    // Synchronize lot configuration from Supabase to local XML on startup
    const { syncLotsOnStartup } = require('../helpers/modifyXML');
    try {
      await syncLotsOnStartup();
    } catch (err) {
      console.warn('Non-fatal startup sync warning (usually read-only filesystem):', err.message);
    }
    console.log('Database online [Supabase + Auth]');
  }

  middlewares() {
    const corsOptions = {
      origin: '*', // Ajusta según sea necesario
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    };

    this.app.use(cors(corsOptions));
    this.app.use(express.json());

    // Serve pano.xml dynamically from Supabase before static mapping
    const { generateDynamicXML } = require('../helpers/modifyXML');
    this.app.get('/masterplan/pano.xml', async (req, res) => {
      try {
        const xml = await generateDynamicXML();
        res.type('application/xml');
        res.send(xml);
      } catch (err) {
        console.error('Error serving dynamic pano.xml:', err);
        res.status(500).send('Error loading pano.xml');
      }
    });

    // 1. Dashboard (loginForm.html, adminForm.html, js/)
    this.app.use(express.static(ADMIN_PUBLIC));

    // 2. Master Plan 360 — servido bajo /masterplan/
    this.app.use('/masterplan', express.static(MASTERPLAN_DIR));

    // 3. Sitio web del proyecto — servido en la raíz (fallback)
    this.app.use(express.static(SITE_DIR));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user.routes'));
    this.app.use(this.loginPath, require('../routes/login.routes'));
    this.app.use(this.adminPath, require('../routes/admin.routes'));
    this.app.use(this.aiPath, require('../routes/ai'));
    this.app.use(this.leadsPath, require('../routes/lead.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${this.port}/`);
    });
  }
}

module.exports = Server;
