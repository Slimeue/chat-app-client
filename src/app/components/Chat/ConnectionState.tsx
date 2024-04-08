import { FC } from "react";

interface ConnectionStateProps {
  state: React.SetStateAction<boolean>;
}

export const ConnectionState: FC<ConnectionStateProps> = (props) => {
  return (
    <>
      <p>State:{" " + props.state}</p>
    </>
  );
};
