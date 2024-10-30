import React from "react";

interface IUser {
  id: string;
}
const Page = ({ params }: { params: IUser }) => {
  const { id } = params;
  return <div className="text-3xl">User Details Page {id}</div>;
};

export default Page;
