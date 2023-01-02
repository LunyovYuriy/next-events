import { useRouter } from "next/router";
import IListEmpty from "../interfaces/IListEmpty";
import classes from '../scss/ListEmpty.module.scss';

function ListEmpty({ date }: IListEmpty) {
  const router = useRouter();

  return (
    <>
      <p>
        There is no events for the <strong>{date}</strong>
      </p>
      <span className={classes.back} onClick={() => router.back()}>Go back</span>
    </>
  );
}

export default ListEmpty;
