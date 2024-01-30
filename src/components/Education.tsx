interface EducationProps {
  education: {
    id: number;
    diploma: string;
    school: string;
    where: string;
    year: string;
    keys: string;
  }[];
}
const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div
      id="education"
      className="w-full min-h-screen mt-3 flex flex-col justify-center items-center mx-auto"
    >
      <div className="p-3 my-4">
        <p className="w-full flex justify-center text-2xl text-gray-800 dark:text-gray-200 font-bold">
          Education
        </p>
      </div>
      <div className="relative w-5/6 md:w-3/4 mt-8">
        <div className="border-r-2 border-gray-700 dark:border-gray-200 border-dotted absolute h-full top-0 z-0 left-[7px] mt-4" />
        <ul className="list-none m-0 p-0">
          {education.map((item) => (
            <li className="mb-2" key={item.id}>
              <div className="flex items-center mb-1">
                <div className="bg-gray-600 animate-pulse absolue  rounded-full h-4 w-4 border-gray-200 border-2 z-10" />
                <div className="flex-1 ml-4 font-medium dark:text-gray-100">
                  {item.year}{" "}
                </div>
              </div>
              <div className="ml-12 text-justify font-bold text-gray-700 dark:text-gray-500">
                {item.diploma}
              </div>
              <div className="ml-12 text-justify font-medium text-md dark:text-gray-400">
                At - {item.school}. ({item.where})
              </div>
              <div className="ml-12 leading-loose text-sm tracking-tight text-justify text-gray-900 dark:text-gray-100 text-opacity-100">
                {item.keys}.
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
