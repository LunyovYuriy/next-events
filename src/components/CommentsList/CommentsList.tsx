import classes from './scss/CommentsList.module.scss';

function CommentsList() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <strong>Username</strong>
          <span> - </span>
          <span>email</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quam
          odio, dolor beatae voluptatum corporis cupiditate hic veniam libero
          dicta. Quam architecto illum voluptas pariatur voluptatum, nobis
          mollitia distinctio, repellat facilis vitae reiciendis aspernatur vero.
          Id, sint vel, aliquid quis tempora aut fuga nostrum iusto, minus
          voluptates quo ab odit.
        </p>
      </div>
      <div className={classes.container}>
      <div className={classes.row}>
        <strong>Username</strong>
        <span> - </span>
        <span>email</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quam
        odio, dolor beatae voluptatum corporis cupiditate hic veniam libero
        dicta. Quam architecto illum voluptas pariatur voluptatum, nobis
        mollitia distinctio, repellat facilis vitae reiciendis aspernatur vero.
        Id, sint vel, aliquid quis tempora aut fuga nostrum iusto, minus
        voluptates quo ab odit.
      </p>
    </div>
    </>
  );
}

export default CommentsList;
