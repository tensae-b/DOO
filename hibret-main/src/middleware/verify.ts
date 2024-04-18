import jwt from 'jsonwebtoken';

export const isAdmin = (req, res, next) => {
  if (req.user.role === "Admin") {
    next();
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
};

export const isSectionHead = (req, res, next) => {
  if (req.user.role === "Section Head") {
    next();
  } else {
    res.status(403).json({ message: 'Unauthorized' });
 }
};

export const isChiefCreditOfficer = (req, res, next) => {
  if (req.user.role === "Chief Credit Officer") {
    next();
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
};

export const isDepartmentDirector = (req, res, next) => {
  if (req.user.role === "Department Director") {
    next();
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
};

export const isDivisionManager = (req, res, next) => {
  if (req.user.role === "Division Manager") {
    next();
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
};
