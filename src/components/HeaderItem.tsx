interface HeaderItemProps {
  name: string;
  icon: any;
}
export default function HeaderItem(props: HeaderItemProps) {
  return (
    <>
      <div
        className="header-item text-white text-xl font-semibold flex justify-start items-center  tracking-wider gap-3 cursor-pointer underline-offset-8 p-2
      underline-animation"
      >
        {props.name != "" ? (
          <>
            {" "}
            <props.icon />
            <h2 className="">{props.name}</h2>
          </>
        ) : (
          <props.icon />
        )}
      </div>
    </>
  );
}
