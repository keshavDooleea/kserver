import session from "express-session";

export const sessionOptions: session.SessionOptions = {
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: parseInt(process.env.COOKIE_MAX_AGE),
  },
};
