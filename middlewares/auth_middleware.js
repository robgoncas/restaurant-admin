import jwt from 'jsonwebtoken';
export const verificar_token = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token) return res.redirect('/login');
  try{
    req.usuario = jwt.verify(token, process.env.JWT_SECRET);
    next();
  }catch(e){
    res.redirect('/login');
  }
};