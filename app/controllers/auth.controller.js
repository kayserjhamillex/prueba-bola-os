const db = require('../models');
const crypto = require('crypto');

exports.loginForm = function(req, res) {
  res.render('login', {session: req.session, error: null});
}

exports.loginAction = async function(req, res) {
  try {
    const {email, password} = req.body;
    const hashPassword = crypto.createHmac('sha256', 'llavedehash')
                               .update(password)
                               .digest('hex');

    const usuario = await db.Usuario.findOne({
                                where: {
                                  email: email,
                                  password: hashPassword
                                },
                                attributes: ['nombres', 'apellidos', 'email', 'dni']
                              });
    if (usuario) {
      req.session.usuario = usuario;
      res.redirect('/');
    } else {
      res.render('login', {session: req.session, usuario: null, error: 'email o clave errada.'});
    }
  } catch(err) {
    res.render('login', {session: req.session, usuario: null, error: 'error interno'})
  }
}

exports.logoutAction = function(req, res) {
  req.session.destroy(function(){
    res.redirect('/');
  });
}
