import React, { useState } from "react";
import Link from "next/link";

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  let nextId = 1;

  const addTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = { id: Date.now(), text: input };
      setTodos([newTodo, ...todos]);
      setInput("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 bg- bg-gray-400 min-h-screen">
      <nav className="mt-8">
        <Link
          href="/"
          className="text-darktext underline hover:text-primary text-center"
        >
          Home
        </Link>
      </nav>
      <h2 className="text-2xl font-bold mb-4 text-primary text-center">
        Min TODO-lista
      </h2>
      <div className="flex justify-center mb-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded max-w-md"
          placeholder="Lägg till en TODO"
        />

        <button
          onClick={addTodo}
          className="bg-greenAccent text-white p-2 rounded"
        >
          Lägg till
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b py-4 mb-2 border-gray-700 rounded-lg"
          >
            <span className="flex-1">{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-redAccent ml-2 hover:underline"
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
