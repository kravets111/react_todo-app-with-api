import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

type Props = {
  filteredTodos: Todo[];
  onDeleteTodo: (todoId: number) => Promise<void>;
  onUptedeTodo: (updetedTodo: Todo) => Promise<void>;
  tempTodo: Todo | null;
  onToggleComplete: (todoId: number, newCompleted: boolean) => void;
  loadingTodos: { [key: number]: boolean };
};

export const TodoList: React.FC<Props> = ({
  filteredTodos,
  onDeleteTodo,
  onUptedeTodo,
  tempTodo,
  onToggleComplete,
  loadingTodos,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUptedeTodo}
          onDelete={onDeleteTodo}
          onToggleComplete={onToggleComplete}
          isDeleting={loadingTodos[todo.id] || false}
        />
      ))}

      {tempTodo && (
        <TodoItem
          todo={tempTodo}
          onDelete={() => Promise.resolve()}
          onUpdate={() => Promise.resolve()}
          isTemp
          onToggleComplete={() => {}}
          isDeleting={false}
        />
      )}
    </section>
  );
};
