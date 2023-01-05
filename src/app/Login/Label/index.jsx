import './index.scss';

// type ComponentProps = {
//     label: any;
//     className?: string;
// };

const Label = (props) => {
    const { label, className } = props;

    return (
        <div className="acglabelDiv">
            <label className={`${className ? className : ''} acglabelStyle`}>{label}</label>
        </div>
    );
};

export default Label;
