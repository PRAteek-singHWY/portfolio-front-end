import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({ }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center snap-center"
        src="https://media.licdn.com/dms/image/C4D03AQFdf3CNdfgvrQ/profile-displayphoto-shrink_800_800/0/1638933174679?e=1690416000&v=beta&t=CDECiBro58fz5AV1U7p-UKXaX4rrkiTKMOFEmzFNHvQ"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of SwY</h4>
        <p className="font-bold text-2xl mt-1">SwY</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="https://media.licdn.com/dms/image/C4D03AQFdf3CNdfgvrQ/profile-displayphoto-shrink_800_800/0/1638933174679?e=1690416000&v=beta&t=CDECiBro58fz5AV1U7p-UKXaX4rrkiTKMOFEmzFNHvQ" alt="" />
          <img className="h-10 w-10 rounded-full" src="https://media.licdn.com/dms/image/C4D03AQFdf3CNdfgvrQ/profile-displayphoto-shrink_800_800/0/1638933174679?e=1690416000&v=beta&t=CDECiBro58fz5AV1U7p-UKXaX4rrkiTKMOFEmzFNHvQ" alt="" />
          <img className="h-10 w-10 rounded-full" src="https://media.licdn.com/dms/image/C4D03AQFdf3CNdfgvrQ/profile-displayphoto-shrink_800_800/0/1638933174679?e=1690416000&v=beta&t=CDECiBro58fz5AV1U7p-UKXaX4rrkiTKMOFEmzFNHvQ" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points Summary Points</li>
          <li>Summary Points Summary Points</li>
          <li>Summary Points Summary Points</li>
          <li>Summary Points Summary Points</li>
          <li>Summary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
