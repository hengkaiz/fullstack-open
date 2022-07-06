const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((x) => (
        <div key={x.id}>
          <Header name={x.name} />
          <Content content={x.parts} />
        </div>
      ))}
    </div>
  );
};

const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ content }) => {
  return (
    <div>
      {content.map((x) => (
        <Part key={x.id} part={x} />
      ))}
      <p>
        <b>total of {content.reduce((s, x) => s + x.exercises, 0)} exercises</b>
      </p>
    </div>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

export default Course;
