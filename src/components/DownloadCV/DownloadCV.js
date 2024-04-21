import resumePdf from './resume.pdf';
const DownloadCV = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <button className="font-semibold bg-blue  text-white  " onClick={downloadCV}>
            Download CV
        </button>
    );
};
export default DownloadCV;