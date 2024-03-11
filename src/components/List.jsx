import Card from "./Card";

const List = ({list, deleteNote}) => {

  return (
      <ul className="list">
        {list.map((item) => (
            <Card
              key={item.id}
              note={item}
              deleteNote={deleteNote}
            />
          ))}
      </ul>
  );
}

export default List;