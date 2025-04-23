
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  link
}) => {
  const CardContent = () => (
    <>
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center text-primary font-medium">
            Learn more
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover-scale h-full flex flex-col">
      {link ? (
        <Link to={link} className="h-full flex flex-col">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

export default ServiceCard;
