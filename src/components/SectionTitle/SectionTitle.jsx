

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="space-y-4">
            <div className="flex gap-10 items-center justify-center">
                <progress className="progress w-56 bg-yellow-600"></progress>
                <p className="text-yellow-600 font-medium text-lg">{subHeading}</p>
                <progress className=" bg-yellow-600 progress w-56"></progress>
            </div>


            <h2 className="text-3xl text-yellow-400 text-center">--- {heading} ---</h2>
        </div>
    );
};

export default SectionTitle;