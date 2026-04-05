import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const usuarios = [];

export const register = async (req,res)=>{
  const {email,password} = req.body;
  const hash = await bcrypt.hash(password,10);
  usuarios.push({email,password:hash});
  res.redirect('/login');
};

export const login = async (req,res)=>{
  const {email,password} = req.body;
  const user = usuarios.find(u=>u.email===email);
  if(!user) return res.send('Usuario no existe');

  const valid = await bcrypt.compare(password,user.password);
  if(!valid) return res.send('Password incorrecta');

  const token = jwt.sign({email}, process.env.JWT_SECRET);
  res.cookie('token', token, {httpOnly:true});
  res.redirect('/dashboard');
};