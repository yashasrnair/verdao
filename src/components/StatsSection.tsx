import React, { FC } from 'react';
import { FaUsers, FaVoteYea, FaShieldAlt } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import type { IconType } from 'react-icons/lib';

type StatType = {
  Icon: IconType;
  value: string;
  label: string;
  bg: string;
  textColor?: string;
};

const stats: StatType[] = [
  {
    Icon: FaUsers,
    value: '150+',
    label: 'Global Stakeholders',
    bg: 'from-cyan-400 to-green-500',
  },
  {
    Icon: FaVoteYea,
    value: '50K+',
    label: 'Votes Cast',
    bg: 'from-cyan-400 to-green-500',
  },
  {
    Icon: BsFillSunFill,
    value: '2.4M',
    label: 'Carbon Credits',
    bg: 'from-yellow-400 to-green-400',
    textColor: 'text-yellow-300',
  },
  {
    Icon: FaShieldAlt,
    value: '99.9%',
    label: 'Verified Standards',
    bg: 'from-green-400 to-yellow-300',
    textColor: 'text-green-200',
  },
];

const StatsSection: FC = () => {
  return (
    <section className="bg-[#1a1a1a] py-16 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-black border border-[#00ff99] rounded-xl p-6 shadow-[0_0_15px_#00ff99] hover:shadow-[0_0_25px_#00ff99] transition-all duration-300"
        >
          <div
            className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br ${stat.bg} mb-4`}
          >
            {React.createElement(stat.Icon as React.ElementType, { size: 28 })}
          </div>
          <h2 className={`text-2xl font-bold ${stat.textColor || 'text-green-400'}`}>{stat.value}</h2>
          <p className="text-gray-400 mt-1 text-sm">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
