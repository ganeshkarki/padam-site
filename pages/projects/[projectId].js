import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const projectId = router.query.projectId;

  //send req to backend API to fetch project with ID

  return <h1>Detail Page</h1>;
};

export default DetailPage;
