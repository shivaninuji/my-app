// src/components/ui/card.tsx
import React from 'react';

export const Card: React.FC = ({ children }) => {
  return <div className="card">{children}</div>;
};

export const CardHeader: React.FC = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

export const CardContent: React.FC = ({ children }) => {
  return <div className="card-content">{children}</div>;
};
