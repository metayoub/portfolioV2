interface SkillProps {
  skill: string[];
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div
      id="skill"
      className="w-full min-h-screen m-8 flex flex-col justify-center items-center mx-auto"
    >
      <div className="p-3 mb-4">
        <p className="w-full flex justify-center text-2xl text-gray-800 dark:text-gray-200 font-bold">
          Skills
        </p>
      </div>
      <div className="relative w-5/6 md:w-3/4 flex flex-wrap justify-center mt-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-y-6 w-2/3">
          {skill.map((item) => (
            <div
              key={item}
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
