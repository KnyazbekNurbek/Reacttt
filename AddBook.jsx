import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();

  const schema = Yup.object({
    title: Yup.string().min(2, "Минимум 2 символа").required("Обязательно"),
    author: Yup.string().required("Обязательно"),
    genre: Yup.string()
      .oneOf(["fiction", "nonfiction", "tech"], "Неверный жанр")
      .required("Обязательно"),
    rating: Yup.number()
      .min(0)
      .max(5)
      .required("Введите рейтинг от 0 до 5"),
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a New Book</h2>
      <Formik
        initialValues={{ title: "", author: "", genre: "", rating: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          const newBook = { ...values, id: Date.now() };
          const books = JSON.parse(localStorage.getItem("books") || "[]");
          books.push(newBook);
          localStorage.setItem("books", JSON.stringify(books));
          navigate("/books");
        }}
      >
        <Form>
          <div>
            <label>Title: </label>
            <Field name="title" />
            <ErrorMessage name="title" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Author: </label>
            <Field name="author" />
            <ErrorMessage name="author" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Genre: </label>
            <Field as="select" name="genre">
              <option value="">Select...</option>
              <option value="fiction">Fiction</option>
              <option value="nonfiction">Nonfiction</option>
              <option value="tech">Tech</option>
            </Field>
            <ErrorMessage name="genre" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Rating: </label>
            <Field type="number" step="0.1" name="rating" />
            <ErrorMessage name="rating" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit">Add Book</button>
        </Form>
      </Formik>
    </div>
  );
}