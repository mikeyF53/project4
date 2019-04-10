# frozen_string_literal: true

User.create(name: 'Mike', email: 'email@gmail.com', password_digest: 'abc')
User.create(name: 'Coco', email: 'coco@gmail.com', password_digest: '123')

Lesson.create(title: 'How to use .map()', description: 'Learn how to use map function', user_id: 1)
Lesson.create(title: 'How to use .filter()', description: 'Learn how to use the filter function', user_id: 1)
Lesson.create(title: 'How to use .reduce()', description: 'Learn how to use the reduce function', user_id: 2)

Exercise.create(title: 'Map practice', lesson_id: 1, snippet: "{this.props.lessons &&
  this.props.lessons.map(lesson => (
    <div key={lesson.id}>
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>")

Exercise.create(title: 'Map practice', lesson_id: 2, snippet: "<div>
  <p>Lesson Details Page</p>
  {props.exercises &&
    props.exercises.map(exercise => (
      <div>
        <h3>{exercise.title}</h3>
        <div>{exercise.snippet}</div>
      </div>
    ))}
</div>")
Exercise.create(title: 'Filter practice', lesson_id: 2)
Exercise.create(title: 'Reduce practice', lesson_id: 3)
