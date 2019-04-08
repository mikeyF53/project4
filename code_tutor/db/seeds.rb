
User.create(name: 'Mike', email: 'email@gmail.com', password_digest: 'abc')
User.create(name: 'Coco', email: 'coco@gmail.com', password_digest: '123')

Lesson.create(title: 'How to use .map()', description:'Learn how to use map function', user_id: 1)
Lesson.create(title: 'How to use .filter()', description:'Learn how to use the filter function', user_id: 1)
Lesson.create(title: 'How to use .reduce()', description:'Learn how to use the reduce function', user_id: 2)

Exercise.create(title: 'Map practice',lesson_id: 1)
Exercise.create(title: 'Filter practice',lesson_id: 2)
Exercise.create(title: 'Reduce practice',lesson_id: 3)