// components/Services.tsx
import React from 'react';

interface Service {
  image: string;
  title: string;
  description: string;
}

const serviceslist: Service[] = [
  {
    image: '/icon-1.png',
    title: 'Penetration Testing',
    description: 'Penetration testing is the art of finding vulnerabilities in a web application, computer system, or network that an attacker could exploit.'
  },
  {
    image: '/icon-2.png',
    title: 'Vulnerability Assessment',
    description: 'Vulnerability Assessment is intended to test your inward and outer framework against known vulnerabilities and exposures.'
  },
  {
    image: '/threat-hunting.png',
    title: 'Threat Hunting',
    description: 'With our Threat Hunting service, we proactively seek out these hidden threats.'
  },
  {
    image: '/icon-4.png',
    title: 'Malware Analysis',
    description: 'Malware Analysis is the procedure of determining the impact of a given malware test. Malware may include viruses that collect user information without consent.'
  },
  {
    image: '/forensics.png',
    title: 'Forensics Investigation',
    description: 'Go deeper to investigate and uncover the root cause of attacks or malicious activity over the infrastructure.'
  },
  {
    image: '/gdpr.png',
    title: 'GDPR Compliance',
    description: 'We help organizations to comply with GDPR by providing a comprehensive assessment of the organization’s data protection policies and procedures.'
  },
  {
    image: '/icon-7.png',
    title: 'Incident Response',
    description: 'Incident response is an approach to checkout and address security breach or attack. Our motto is to provide a prompt response.'
  },
  {
    image: '/cloud-security.png',
    title: 'Cloud Security',
    description: 'To protect and test cloud infrastructure data from security threats via assessment and hardening.'
  },
  {
    image: '/compliant.png',
    title: 'SOC Compliance',
    description: 'Assist in achieving and maintaining SOC compliance, enhancing posture through gap analysis & implementation.'
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {serviceslist.map((service, index) => (
          <div key={index} className="flex p-5 gap-4  bg-transparent">
            
            <img src={service.image} alt={service.title} className="w-16 h-16 mb-4" />
            <div className='flex flex-col text-left'>
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
