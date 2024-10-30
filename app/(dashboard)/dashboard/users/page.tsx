import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul>
        <li className="mt-10">
          <Link href={"/dashboard/users/1"}>User1</Link>
        </li>
        <li className="mt-10">
          <Link href={"/dashboard/users/2"}>User2</Link>
        </li>
        <li className="mt-10">
          <Link href={"/dashboard/users/3"}>User3</Link>
        </li>
        <li className="mt-10">
          <Link href={"/dashboard/users/3"}>User3</Link>
        </li>

      </ul>
    </div>
  );
};

export default Page;
