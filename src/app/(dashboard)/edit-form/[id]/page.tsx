import EditForm from "./EditForm";

type Props = {
    params: any;
};

const page = ({ params }: Props) => {
    const { id } = params;

    return <EditForm id={id} />;
};

export default page;
